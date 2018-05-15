## 测试脚本(*.spec.js)

File | Description |
:--- | :---------- |
login/mobile | 首页-登陆页面-手机登陆-首页
login/qq | 首页-登陆页面-qq登陆-首页
login/weibo | 首页-登陆页面-微博登陆-首页
category/breadcrumb_t1 | 首页-护肤一级分类
category/breadcrumb_t2 | 首页-面膜二级分类
category/breadcrumb_t3 | 首页-套装三级分类
brand/alphabet  |   首页-全部品牌页-依次点击字母表字母
brand/product_filter  |   首页-全部品牌页-品牌(ALGENIST/奥杰尼)商品页面-单选“分类”筛选-"更多选项"-多选筛选
brand/product_sort  |   首页-全部品牌页-品牌(ALGENIST/奥杰尼)商品页面-综合降序-销量降序-新品降序-人气降序-价格升序-价格降序-综合降序
brand/product_quickview  |   首页-全部品牌页-品牌(ALGENIST/奥杰尼)商品页面-鼠标悬停商品-点击“立即购买”-增加商品数量-点击“查看详情”进入商品详情页
home/navigation | 依次悬停首页全部商品类目
home/basic | 首页断言-依次悬停首页全部商品类目-检查各楼层-检查猜你喜欢
myAccount/profile | 首页-登陆-我的丝芙兰-我的订单-我的优惠券
myAccount/profile_edit | 首页-登陆-我的丝芙兰-编辑个人资料-修改昵称-保存-首页
miniCart/pre_login | 首页-悬停迷你购物车-检查登陆按钮-检查0件商品
miniCart/post_login | 首页-登陆-检查迷你购物车显示-检查商品图片名称，规格，价格，件数显示-点击商品名称跳转PDP页面
pdp/add_cart | 首页-分类页(护肤)-PDP页面-加购物车-登陆-PDP页面
pdp/basic | 首页-分类页(护肤)-PDP页面-依次点击缩略图看大图-验证名称-验证描述-验证简介-验证价格
pdp/policies | 首页-分类页(护肤)-PDP页面-点击配送信息-图片对比验证支付及配送-图片对比验证价格声明-图片对比验证退换货规定
exclusive | 首页-独家发售
gift_set | 首页-礼物套装
alipay | 首页-登陆-分类页(香水)-PDP页面-核对商品页面-购物车页面第一步(cart)-购物车页面第二步(checkout)-购物车页面第三步(payment)-支付宝支付页面
