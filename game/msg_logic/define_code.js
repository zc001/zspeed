/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-6-13
 * Time: 上午11:54
 * To change this template use File | Settings | File Templates.
 */

var msg_type=require('./msg_type');
var constant_data=require('./constant_data');

//登录类型
function LoginType()
{
    this.LT_FAST = 1;//use login 快速登录
    this.LT_DEFAULT  = 2;//use acc & pwd login 注册登录
    this.LT_PP = 3; // PP助手
    this.LT_TONGBUTUI = 4; // 同步推
    this.LT_91  = 5;//91账号
    this.LT_KUAIYONG = 6; //快用账号
}
exports.loginType = new LoginType();

//账号标签（保证各个平台的账号唯一性）
function AccountTag()
{
    this.WY="wy"; //微云普通注册
    this.PP = "pp";//
    this.TB = "tb";//
    this.JY = "91";//
    this.KY = "ky";//
}
exports.accountTag = new AccountTag();

//平台类型(用于区分平台平台充值和平台开服)
function PlatformType()
{
    this.PT_PP_IOS = 1;//PP助手平台（用于区别开服）
    this.PT_APP_STORE = 2; //app_store(苹果)
}
exports.pfType = new PlatformType();

//错误号
function MsgCode()
{
    this.SUCC = 0;  //成功
    this.GOLD_NOT_ENOUGH =1; //游戏币不足
    this.RMB_NOT_ENOUGH = 2;  //人民币不足
    this.POINT_NOT_ENOUGH=3;//体力不足,请购买体力
    this.RAN_NAME_NOT_ENOUGH=4;//没有可用的随机名
    this.NAME_TOO_ERROR=5;//名字长度需在4到10个字符之间
    this.INVALID_CODE_EXIST=7;//非法字符存在
    this.NAME_IS_EXIST=8;//角色名已经存在
    this.SECOND_LOGIN_ERROR=9;//二次登录错误
    this.FRIEND_ME_LIMIT=10;//您的好友数量上限已满，请提升等级后再试！
    this.FRIEND_OTHER_LIMIT=11;//对方玩家好友已满！
    this.FRIEND_NOT_EXIST=12;//好友不存在！
    this.TOWN_NOT_EXIST=13;//城池不存在
    this.FRIEND_IS_EXIST=14;//好友已经存在！
    this.FRIEND_IS_SELF=15;//不能加自己为好友！
    this.EQUIP_NOT_EXIST=16;//装备不存在！
    this.EQUIP_CANT_STRENGTH=17;//装备不可被强化！
    this.CARD_NOT_ENOUGH=18;//缺少同名的武将材料，不可转生！
    this.LEVEL_TOO_LOW=19;//用户等级不足！
    this.FORMATION_NOT_EXIST=20;//阵型不存在！
    this.EXPLOIT_NOT_ENOUGH=21;//功勋不足！
    this.LEVEL_EXCEED_ROLE_LIMIT=22;//武将等级不可超过主公10级！
    this.COUNT_EXCEED_LIMIT=23;//数量超过上限！
    this.RACE_NOT_MATE=24;//职业不匹配！
    this.TOWN_NOT_PASSED=25;//城池没有通关！
    this.STAMINA_IS_FUNLL=28;//体力已经满！
    this.EXPLORE_IS_FUNLL=29;//探索次数已经满！
    this.BAG_IS_FULL=30;//背包已经满！
    this.REWARD_IS_GAINED=31;//奖励已经领取！
    this.POPULAR_NOT_ENOUGH=32;//人气不足！
    this.CARD_IS_LOCKED=33;//武将已经锁定，不能出售！
    this.CARD_ON_FORMATION=34;//该武将在阵型上，操作无效！
    this.MAIL_NOT_EXIST=35;//邮件不存在！
    this.ACTIVITY_NOT_OPEN=36;//活动未开启！
    this.CARD_BAG_IS_FULL=37;//卡牌背包已经满！
    this.EQUIP_BAG_IS_FULL=38;//装备背包已经满！
    this.STAMINA_NOT_ENOUCH=39;//体力不足！
    this.PIECE_NOT_ENOUCH=40;//碎片数量不够！
    this.EXPLORE_NOT_ENOUCH=41;//探索次数不足！
    this.SERVER_ERROR=42;//服务器出错啦，请联系客服要补偿
    this.SIGN_IS_END=43;//已经签过到了
    this.ACHIEVEMENT_NOT_COMPL=44;//成就未完成
    this.MENU_NOT_OPEN=45;//功能未开启
    this.CODE_IS_NOT_EXIST=46;//兑换码不存在
    this.TIME_IS_OVER=47;//次数已经用完
    this.USER_NOT_FIND=48;//用户不存在
    this.CHICK_IS_USED=49;//今天已吃过，等下次再来
    this.CHICK_NOT_TIME=50;//吃鸡时间未到
    this.SACRIFICE_USED=51;//已经参拜，明日再来
    this.SCORE_NOT_ENOUGH=52;//积分不足
    this.EXCHANGE_USED=53;//该物品只能兑换一次。
    this.NO_AUTHORITY=54;//没有权限。
    this.NOT_ACHI=55;//很遗憾，你没有排进前三名。
    this.EQUIP_CANT_COMPOSE=56;//装备不能合成
    this.CARD_ON_GUARD=57;//该武将已经是城守，操作无效！
    this.CARD_STRENGTH_ERROR=58;//城守或上阵武将不能作为强化材料！
    this.REBORN_LEVEL_LOW=59;//武将未达到转生所需的最低等级，不可以转生！
    this.EVOLVE_EQUIP_LACK=60;//武将装备齐全后方可转生！
    this.PURCHASE_ERROR=61;//充值发生异常，请联系客服
    this.COMPOSE_MATERIAL_NOT_ENOUGH=62;//合成需要的材料不足！
    this.KEY_NOT_ENOUGH=63;//所需钥匙不存在！
    this.ACCOUNT_FORMAT_ERROR =64; //账号和密码只能输入6-20个字母、数字、下划线
    this.ACCOUNT_GUEST_ERROR =65; //账号不能以guest开头PWD_TOO_LONG
    this.PWD_FORMAT_ERROR =66; //密码长度介于6到20个字符之间
    this.LEVEL_EXCEED_LIMIT=67;//武将等级超过上限！
}
exports.msg_code = new MsgCode();



var msg_id=new msg_type.MsgID();
exports.msg_id=msg_id;

//常量定义
exports.const_value =constant_data.const_value;
