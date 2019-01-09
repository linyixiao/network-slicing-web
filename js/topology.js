var data = {
    "nodes": [
        {
            "name": "node-122",
            "vmType": "server",
            // "image": "img/server_node.png"
            "image": "image/hosting_server.ico"
        }, {
            "name": "dst1",
            "vmType": "1",
            // "image": "img/vnf_node.png"
            "image": "image/host.ico"
        }, {
            "name": "vnf1",
            "vmType": "2",
            // "image": "img/vnf_node.png"
            "image": "image/host.ico"
        }, {
            "name": "node-123",
            "vmType": "server",
            // "image": "img/server_node.png"
            "image": "image/wifi.ico"
        }, {
            "name": "vnf2",
            "vmType": null,
            // "image": "img/vnf_node.png"
            "image": "image/router.svg"
        }, {
            "name": "src1",
            "vmType": "0",
            // "image": "img/vnf_node.png"
            "image": "image/router.svg"
        }

    ],
    "lines": [
        {
            "source": 0,
            "target": 1,
            "active": true
        }, {
            "source": 0,
            "target": 2,
            "active": true
        }, {
            "source": 0,
            "target": 3,
            "active": false
        }, {
            "source": 3,
            "target": 4,
            "active": false
        }, {
            "source": 3,
            "target": 5,
            "active": true
        }
    ]
};
renderTp(data.nodes,data.lines);
function renderTp(nodes,edges){
    // var width  = 500;
    // var height = 300;
    // var img_w = 40;
    // var img_h = 40;
    // var text_dx = -20;
    // var text_dy = 20;
    var width  = 1000;
    var height = 500;
    var img_w = 50;
    var img_h = 50;
    var text_dx = -40;
    var text_dy = 40;
    var drag = d3.behavior.drag()
        .origin(function(d) {
            return d;
        })
        .on("dragstart", dragstarted)
        .on("drag", dragged)
        .on("dragend", dragended);
    var zoom=d3.behavior.zoom()
        .scaleExtent([-10,10]).on("zoom",zoomed);
    var svg = d3.select("#tpContainer").append("svg")
        .attr("width",width).attr("height",height)
        .style("pointer-events", "all").call(zoom);
    var g   = svg.append("g").attr("class","graphCon");
    var edges_line = g.selectAll("line")
        .data(edges)
        .enter()
        .append("line")
        .style("stroke",function(d,i){
            if(d.active==true){
                return "#f00";
            }
            return "#000";
        })
        .style("stroke-width",2);
    var nodes_img = g.selectAll("image").data(nodes)
        .enter().append("image")
        .attr("width",function(d){
            return img_w;
        })
        .attr("height",function(d){
            return img_h;
        })
        .attr("xlink:href",function(d){
            if(d.vmType=="0"||d.vmType=="1"){
                // return "img/active_src_node.png";
                return "image/hosting_server.ico";
            }else if(d.vmType=="2"){
                // return "img/active_vnf_node.png";
                return "image/hosting_server.ico";
            }
            return d.image;
        }).call(drag);

    var nodes_text = g.selectAll(".nodetext")
        .data(nodes)
        .enter()
        .append("text")
        .attr("class","nodetext")
        .attr("dx",text_dx)
        .attr("dy",text_dy)
        .text(function(d){
            return d.name;
        });
    //定义力学图布局
    var force    = d3.layout.force().nodes(nodes)
        .links(edges)
        .size([width,height])
        .linkDistance(function(d){
            if(d.source.vmType=="server"&&
                d.target.vmType=="server"){
                return 200;
            }
            // return 40;
            return 60;
        })
        .charge(-700).start().on("tick", function(){
            //限制结点的边界
            nodes.forEach(function(d,i){
                d.x = d.x - img_w/2 < 0? img_w/2 : d.x ;
                d.x = d.x + img_w/2 > width ? width - img_w/2 :
                    d.x ;
                d.y = d.y - img_h/2 < 0? img_h/2 : d.y ;
                d.y = d.y + img_h/2 + text_dy > height ?
                    height - img_h/2 - text_dy : d.y ;
            });

            //更新连接线的位置
            edges_line.attr("x1",function(d){ return d.source.x; });
            edges_line.attr("y1",function(d){ return d.source.y; });
            edges_line.attr("x2",function(d){ return d.target.x; });
            edges_line.attr("y2",function(d){ return d.target.y; });
            //更新结点图片和文字
            nodes_img.attr("x",function(d){
                return d.x - img_w/2;
            });
            nodes_img.attr("y",function(d){
                return d.y - img_h/2;
            });
            nodes_text.attr("x",function(d){ return d.x; });
            nodes_text.attr("y",function(d){
                return d.y + img_h/2;
            });
            //画阴影
            var convex_hulls = function(nodes) {
                var  _h, i;
                var hulls = {};
                var k = 0;
                var offset = 65;
                while(k < nodes.length) {
                    var n = nodes[k];
                    if(n.vmType=="server"){
                        _h = hulls['_'+n.index] || (hulls['_'+n.index]
                            = []);
                        _h.push([n.x - offset, n.y - offset]);
                        _h.push([n.x - offset, n.y + offset]);
                        _h.push([n.x + offset, n.y - offset]);
                        _h.push([n.x + offset, n.y + offset]);
                    }
                    ++k;
                }
                var hullset = [];
                for(i in hulls) {
                    if({}.hasOwnProperty.call(hulls, i)) {
                        hullset.push({
                            group: i,
                            path: d3.geom.hull(hulls[i])
                        });
                    }
                }
                return hullset;
            };
            var curve = d3.svg.line().interpolate('cardinal-closed')
                .tension(0.85);
            var fill = d3.scale.category10();
            g.selectAll('path.hulls')
                .data(convex_hulls(g.selectAll("image")
                    .data())).attr('d', function(d) {
                return curve(d.path);
            }).enter().insert('path', 'image')
                .style('fill', function(d) {
                    return fill(d.group);
                }).style('stroke', function(d) {
                return fill(d.group);
            }).style('stroke-linejoin', 'round')
                .style('stroke-width', 10).style('opacity', 0.2);
        });
    function zoomed(){
        g.attr("transform",
            "translate("+d3.event.translate+")scale(" +
            d3.event.scale + ")");
    }
    function dragstarted(d) {
        d3.event.sourceEvent.stopPropagation();
        d3.select(this).classed("dragging", true);
        force.start();
    }
    function dragged(d) {
        d.x = d3.event.x;
        d.y = d3.event.y;
    }

    function dragended(d) {
        d3.select(this).classed("dragging", false);
    }
}