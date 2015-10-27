var express = require("express");
var app = express();

app.get("/add",function(req,res)
{
	res.send({"Answer":parseFloat(req.query.num1)+parseFloat(req.query.num2)});
});

app.get("/subtract",function(req,res)
{
        res.send({"Answer":parseFloat(req.query.num1)-parseFloat(req.query.num2)});
});

app.get("/multiply",function(req,res)
{
        res.send({"Answer":parseFloat(req.query.num1)*parseFloat(req.query.num2)});
});

app.get("/divide",function(req,res)
{
        res.send({"Answer":parseFloat(req.query.num1)/parseFloat(req.query.num2)});
});

app.listen(3000);
console.log("Listening on 52.26.109.24");
