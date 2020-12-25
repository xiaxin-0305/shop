var express = require('express');
var router = express.Router();
require('../util/util');
var $conf = require('../conf/conf');
router.use(express.static('public'));
router.get('/', function (req, res, next) {

    res.json({
        status: '0000',
        msg: 'succees'
    });

});

let users = [{
    'id': '092218229', 'userId': '092218229', 'userName': 'hh', 'userPwd': '123456', 'myPhoto': '1'
}];
let orders = [{
    "orderId": "6222202012101630022",
    "userId": "123456",
    "productId": 10005,
    "productName": "乐视盒子",
    "productPrice": 299,
    "productNum": 1,
    "productImg": "5.jpg",
    "totalPrice": "299",
    "streetName": "广东省深圳市龙岗区天安云谷",
    "postName": "李大大",
    "postCode": "518116",
    "tel": "18888886611",
    "itemPrice": "299",
    "discount": "13.2",
    "shipPrice": "0",
    "freightRisk": "5",
    "createDate": "2020-12-10 16:30:02",
    "ifPay": 1
}, {
    "orderId": "6228202012101057494",
    "userId": "123456",
    "productId": 10002,
    "productName": "小米笔记本",
    "productPrice": 3999,
    "productNum": 2,
    "productImg": "note.jpg",
    "totalPrice": "7998",
    "streetName": "广东省深圳市龙岗区天安云谷",
    "postName": "李大大",
    "postCode": "518116",
    "tel": "18888886611",
    "itemPrice": "7998",
    "discount": "13.2",
    "shipPrice": "0",
    "freightRisk": "5",
    "createDate": "2020-12-10 10:57:49",
    "ifPay": 1
}];
let address =
    [{
        "addressId": 10005,
        "userId": "123456",
        "userName": "裘过",
        "streetName": "江苏省苏州市吴江区车管所",
        "postCode": 88888888,
        "tel": "13478972349",
        "isDefault": 0
    }, {
        "addressId": 10004,
        "userId": "123456",
        "userName": "李洲榕",
        "streetName": "江苏省省苏州市常熟市东南开发区",
        "postCode": 518116,
        "tel": "18888886611",
        "isDefault": 1
    }, {
        "addressId": 10002,
        "userId": "123456",
        "userName": "廖小明",
        "streetName": "江苏省苏州市相城区江滨号院",
        "postCode": 366100,
        "tel": "18888886688",
        "isDefault": 0
    }, {
        "addressId": 10001,
        "userId": "123456",
        "userName": "李晓红",
        "streetName": "江苏省张家港市金港镇",
        "postCode": 518116,
        "tel": "18834782345",
        "isDefault": 0
    }];


// 注册接口
router.get('/register', (req, res, next) => {
    var userName = req.param('userName'); // 获取前台传过来的userName值
    var userId = req.param('userId'); // 获取前台传过来的userId值
    var userPwd = req.param('userPwd'); // 获取前台传过来的userPwd值

    users.push({id: '0', userId: userId, userName: userName, userPwd: userPwd, myPhoto: ''})
    res.json({
        status: '1',
        msg: '',
        result: ''
    });

});
// 该账号是否存在
router.get('/userExist', (req, res, next) => {
    var userId = req.param('userId'); // 获取前台传过来的userId值
    res.json({
        status: '1',
        msg: '',
        result: ''
    });
});
// 登录接口
router.get('/login', (req, res, next) => {
    let userId = req.param('userId'); // 获取前台传过来的userId值
    let userPwc = req.param('userPw'); // 获取前台传过来的密码

    if (users.some(m => m.userId === userId && m.userPwd === userPwc)) {
        res.cookie('userId', users[0].userPwd, {
            path: '/',
            maxAge: 1000 * 60 * 60 // 设置cookie时间
        });
        res.cookie('userName', users[0].userName, {
            path: '/',
            maxAge: 1000 * 60 * 60 // 设置cookie时间
        });
        // req.session.user = result; // 设置session
        res.json({
            status: '1',
            msg: '登录成功!',
            result: users
        });
    } else {
        res.json({
            status: '-2',//密码错误
            msg: 'password error'
        });
    }
});
//登出接口
router.get('/logout', function (req, res, next) {
    res.cookie("userId", "", {
        path: "/",
        maxAge: -1
    });
    res.cookie("userName", "", {
        path: "/",
        maxAge: -1
    });
    res.json({
        status: "1",
        msg: '',
        result: ''
    })
});

//检查是否登录
router.get("/checkLogin", function (req, res, next) {
    if (req.cookies.userId) {
        res.json({
            status: '1',
            msg: '',
            result: req.cookies.userName || ''
        });
    } else {
        res.json({
            status: '0',
            msg: '未登录',
            result: ''
        });
    }
});
let cartData = {
    "status": "1",
    "msg": "获取数据成功",
    "result": [{
        "cartId": 1,
        "userId": "123456",
        "productId": 10002,
        "productName": "小米笔记本",
        "productPrice": 3999,
        "checked": "1",
        "productNum": 1,
        "productImg": "note.jpg",
        "totalPrice": "3999"
    }]
};

// 购物车数据
router.get("/getCartData", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        let userId = req.cookies.userId;
        res.json(cartData);
    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

//删除商品信息
router.get("/delProduct", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        res.json({
            status: '1',
            msg: '删除成功'
        });
    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

// 修改商品数量
router.get("/editProductNum", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        res.json({
            status: '1',
            msg: '更新成功',
            result: result
        });
    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

//全选购物车商品
router.get("/editSelectAll", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        res.json({
            status: '1',
            msg: '删除成功',
            result: ''
        });
    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

//获取用户地址信息
router.get("/addressList", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        let userId = req.cookies.userId;
        res.json({
            status: '1',
            msg: '',
            result: address
        });
    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
})

//设置默认地址
router.get("/setDefauleAdr", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        res.json({
            status: '1',
            msg: '设置成功成功',
            result: ''
        });
    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

// 删除地址
router.get("/delAdr", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        res.json({
            status: '1',
            msg: '删除成功',
            result: ''
        });
    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

//增加新地址
router.get("/insertAdr", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        res.json({
            status: '1',
            msg: '添加成功',
            result: ''
        });
    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

// 生成订单
router.get("/payOrder", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        res.json({
            status: '1',
            msg: 'suc',
            result: '1234'
        });

    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

// 获取订单信息
router.get("/getOrderData", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        let userId = req.cookies.userId;
        res.json({
            status: '1',
            msg: '获取数据成功',
            result: orders
        });

    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

// 删除订单
router.get("/delOrder", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        let userId = req.cookies.userId;
        let orderId = req.param('orderId'); // 获取前台传值
        let index = orders.findIndex(o => o.orderId === orderId);
        orders.splice(index, 1);
        res.json({
            status: '1',
            msg: '',
            result: ''
        });
    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});

//更新订单
router.get("/updateOrder", (req, res, next) => {
    if (req.cookies && req.cookies.userId) {
        let userId = req.cookies.userId;
        let orderId = req.param('orderId'); // 获取前台传值
        let ifPay = 1;
        let order = orders.filter(o => o.orderId === orderId)[0];
        if (order) order.ifPay = ifPay;

    } else {
        res.json({
            status: '0',
            msg: '未登录'
        });
    }
});
module.exports = router;
