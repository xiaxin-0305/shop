<template>
    <div>
        <!-- start header -->
        <mall-header v-on:initscroll="scrollTop"></mall-header>
        <!--end header -->
        <div style="padding-top: 80px">
            <!-- start banner_x -->
            <div class="banner_x center">
                <a href="./index.html" target="_blank">
                    <div class="logo fl"></div>
                </a>
                <a href="/#/goodslist">
                    <div class="ad_top fl"></div>
                </a>
                <div class="nav fl">
                    <ul>
                        <li><a href="./liebiao.html" target="_blank">华为手机</a></li>
                        <li><a href="/#/goodslist">Nova系列</a></li>
                        <li><a href="/#/goodslist">平板·笔记本</a></li>
                        <li><a href="/#/goodslist">电视</a></li>
                        <li><a href="/#/goodslist">电器</a></li>
                        <li><a href="/#/goodslist">生鲜</a></li>
                        <li><a href="/#/goodslist">超市</a></li>
                        <li><a href="/#/goodslist">秒杀</a></li>
                        <li><a href="/#/goodslist">拍卖</a></li>
                    </ul>
                </div>
                <div class="search fr">
                    <form action="" method="post">
                        <div class="text fl">
                            <el-input v-model="input" placeholder="请输入内容" class="shuru" clearable></el-input>
                        </div>
                        <div class="submit fl">
                           <a href="/#/goodslist"> <el-button type="primary">搜索</el-button></a>
                        </div>
                        <div class="clear"></div>
                    </form>
                    <div class="clear"></div>
                </div>
            </div>
            <!-- end banner_x -->

            <!-- start banner_y -->
            <div class="banner_y center">
                <div class="nav">
                    <ul>
                        <li>
                            <a href="/#/goodslist">手机</a>
                            <a href="/#/goodslist">运营商</a>
                            <goodsM></goodsM>
                        </li>
                        <li>
                            <a href="/#/goodslist">笔记本</a>
                            <a href="/#/goodslist">平板</a>
                            <goods-modify></goods-modify>
                        </li>
                        <li>
                            <a href="/#/goodslist">男装</a>
                            <a href="/#/goodslist">女装</a>
                            <goods-modify></goods-modify>
                        </li>
                        <li>
                            <a href="/#/goodslist">美妆</a>
                            <a href="/#/goodslist">个护清洁</a>
                            <goods-modify></goods-modify>
                        </li>
                        <li>
                            <a href="/#/goodslist">女鞋</a>
                            <a href="/#/goodslist">箱包</a>
                            <goods-modify></goods-modify>
                        </li>
                        <li>
                            <a href="/#/goodslist">男鞋</a>
                            <a href="/#/goodslist">运动</a>
                            <goodsM></goodsM>
                        </li>
                        <li>
                            <a href="/#/goodslist">食品</a>
                            <a href="/#/goodslist">酒类</a>
                            <goods-modify></goods-modify>
                        </li>
                        <li>
                            <a href="/#/goodslist">艺术</a>
                            <a href="/#/goodslist">礼品鲜花</a>
                            <goods-modify></goods-modify>
                        </li>
                        <li>
                            <a href="/#/goodslist">图书</a>
                            <a href="/#/goodslist">文娱</a>
                            <goodsM></goodsM>
                        </li>
                        <li>
                            <a href="/#/goodslist">机票</a>
                            <a href="/#/goodslist">酒店</a>
                            <goods-modify></goods-modify>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="sub_banner center">
                <div class="datu f1"><a href="/#/goodslist"><img src="static/image/xiao2.webp" alt=""></a></div>
            </div>
            <!-- end banner -->

            <!-- start danpin -->
            <div class="danpin center">

            <div class="biaoti center">手机明星单品</div>
                <div class="main center">
                    <div class="mingxing fl">
                        <div class="sub_mingxing"><a href="/#/goodslist"><img src="static/image/pinpai1.png" alt=""></a>
                        </div>
                        <div class="pinpai"><a href="/#/goodslist">苹果 iPhone 8 Plus</a></div>
                        <div class="youhui">12月1日-21日享花呗12期分期免息</div>
                        <div class="jiage">1838元起</div>
                    </div>
                    <div class="mingxing fl">
                        <div class="sub_mingxing"><a href="/#/goodslist"><img src="static/image/pinpai2.png" alt=""></a>
                        </div>
                        <div class="pinpai"><a href="/#/goodslist">Huawei/华为 畅享20 5G 手机 6+128GB</a></div>
                        <div class="youhui">12月9日-10日，下单立减200元</div>
                        <div class="jiage">1858元</div>
                    </div>
                    <div class="mingxing fl">
                        <div class="sub_mingxing"><a href="/#/goodslist"><img src="static/image/pinpai3.png" alt=""></a>
                        </div>
                        <div class="pinpai"><a href="/#/goodslist">Apple/苹果 iphone 12 5G手机</a></div>
                        <div class="youhui">12月1日-21日享花呗12期分期免息</div>
                        <div class="jiage">6299元</div>
                    </div>
                    <div class="mingxing fl">
                        <div class="sub_mingxing"><a href="/#/goodslist"><img src="static/image/pinpai4.png" alt=""></a>
                        </div>
                        <div class="pinpai"><a href="/#/goodslist">2020新款Apple苹果 MacBook Pro MPXQ2超薄笔记本电脑</a></div>
                        <div class="youhui">更轻更薄，像杂志一样随身携带</div>
                        <div class="jiage">4888元起</div>
                    </div>
                    <div class="mingxing fl">
                        <div class="sub_mingxing"><a href="/#/goodslist"><img src="static/image/pinpai5.png" alt=""></a>
                        </div>
                        <div class="pinpai"><a href="/#/goodslist">华为MatePad Pro平板电脑</a></div>
                        <div class="youhui">电影级色域，绚丽全面屏</div>
                        <div class="jiage">4099元起</div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="peijian w">
                <div class="biaoti center">配件</div>
                <div class="main center">
                    <div class="content">
                        <div class="remen fl"><a href="/#/goodslist"><img src="static/image/peijian1.jpg"></a>
                        </div>
                        <div class="remen fl">
                            <div class="xinpin"><span>新品</span></div>
                            <div class="tu"><a href="/#/goodslist"><img src="static/image/peijian2.jpg"></a></div>
                            <div class="miaoshu"><a href="/#/goodslist">苹果12 硅胶保护套</a></div>
                            <div class="jiage">38元</div>
                            <div class="pingjia">746人评价</div>
                        </div>
                        <div class="remen fl">
                            <div class="xinpin"><span style="background:#fff"></span></div>
                            <div class="tu"><a href="/#/goodslist"><img src="static/image/peijian3.jpg"></a></div>
                            <div class="miaoshu"><a href="/#/goodslist">小米手机4c 小米4c 智能</a></div>
                            <div class="jiage">29元</div>
                            <div class="pingjia">372人评价</div>
                        </div>
                        <div class="remen fl">
                            <div class="xinpin"><span style="background:red">享6折</span></div>
                            <div class="tu"><a href="/#/goodslist"><img src="static/image/peijian4.jpg"></a></div>
                            <div class="miaoshu"><a href="/#/goodslist">红米NOTE 4X 红米note4X</a></div>
                            <div class="jiage">19元</div>
                            <div class="pingjia">372人评价</div>
                        </div>
                        <div class="remen fl">
                            <div class="xinpin"><span style="background:#fff"></span></div>
                            <div class="tu"><a href="/#/goodslist"><img src="static/image/peijian5.jpg"></a></div>
                            <div class="miaoshu"><a href="/#/goodslist">小米支架式自拍杆</a></div>
                            <div class="jiage">89元</div>
                            <div class="pingjia">372人评价</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="content">
                        <div class="remen fl"><a href="/#/goodslist"><img src="static/image/peijian6.png"></a>
                        </div>
                        <div class="remen fl">
                            <div class="xinpin"><span style="background:#fff"></span></div>
                            <div class="tu"><a href="/#/goodslist"><img src="static/image/peijian7.jpg"></a></div>
                            <div class="miaoshu"><a href="/#/goodslist">小米指环支架</a></div>
                            <div class="jiage">19元</div>
                            <div class="pingjia">372人评价</div>
                        </div>
                        <div class="remen fl">
                            <div class="xinpin"><span style="background:#fff"></span></div>
                            <div class="tu"><a href="/#/goodslist"><img src="static/image/peijian8.jpg"></a></div>
                            <div class="miaoshu"><a href="/#/goodslist">米家随身风扇</a></div>
                            <div class="jiage">19.9元</div>
                            <div class="pingjia">372人评价</div>
                        </div>
                        <div class="remen fl">
                            <div class="xinpin"><span style="background:#fff"></span></div>
                            <div class="tu"><a href="/#/goodslist"><img src="static/image/peijian9.jpg"></a></div>
                            <div class="miaoshu"><a href="/#/goodslist">红米4X 高透软胶保护套</a></div>
                            <div class="jiage">59元</div>
                            <div class="pingjia">775人评价</div>
                        </div>
                        <div class="remenlast fr">
                            <div class="hongmi"><a href="/#/goodslist"><img src="static/image/hongmin4.png" alt=""></a>
                            </div>
                            <div class="liulangengduo"><a href="/#/goodslist"><img src="static/image/liulangengduo.png"
                                                                                   alt=""></a>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <mallfooter></mallfooter>
        </div>
    </div>
</template>

<script>
    import mallHeader from "../components/header";
    import  goodsModify from "../components/GoodsModify";
    import  goodsM from "../components/GoodsM";
    import  mallfooter from "../components/footer.vue";
    export default {
        name: "NewHome.vue",
        components: {
            mallHeader,
            goodsModify,
            goodsM,
            mallfooter
        },
        data() {
        return {
          input: ''
        }
  }
    }
</script>

<style scoped>

</style>