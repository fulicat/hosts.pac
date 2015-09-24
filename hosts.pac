/**
 * hosts.pac
 * @authors Jack.Chan
 * @date    2015-09-23 14:58:50
 * @update  2015-09-24 13:50:26
 */

// config (1: enabled | 0: disabled)
var config = {
	hosts: 1,
	blackList: 1,
	digitalDomain: 0 // block digitalDomain
};


// hosts
var hostsList = [
	{domain:'localhost', ip:'127.0.0.1:80'},
	{domain:'localhost.dev'}
];

// blackList (url(keyword) or domain)
var blackList = [
	{url:'http://58.215.179.159/'},
	{url:'http://bbs.hbqc.com/ad/'},
	{url:'http://www.dygang.com/d/'},
	{domain:'9v.cn'},
	{domain:'ete.cn'},
	{domain:'pj8.net'},
	{domain:'myad.cn'},
	{domain:'mbai.cn'},
	{domain:'csad.cc'},
	{domain:'tjq.com'},
	{domain:'og114.cn'},
	{domain:'5636.com'},
	{domain:'37cs.com'},
	{domain:'a3p4.com'},
	{domain:'dzgg.com'},
	{domain:'2345.com'},
	{domain:'ads8.com'},
	{domain:'pziad.com'},
	{domain:'weiyi.com'},
	{domain:'fbaba.net'},
	{domain:'lmaaa.com'},
	{domain:'114la.com'},
	{domain:'ufolm.com'},
	{domain:'acbbb.com'},
	{domain:'cxcxx.com'},
	{domain:'18app.com'},
	{domain:'my5058.com'},
	{domain:'3alian.net'},
	{domain:'egooad.com'},
	{domain:'dianru.com'},
	{domain:'sharele.cn'},
	{domain:'wbindex.cn'},
	{domain:'union001.cn'},
	{domain:'ningmob.com'},
	{domain:'wandalm.com'},
	{domain:'tuhaocpc.com'},
	{domain:'xinbailm.com'},
	{domain:'wosewang.com'},
	{domain:'jifenqiang.com'},
	{domain:'union.uxin.com'},
	{domain:'union.2345.com'},
	{domain:'yinxiangma.com'},
	{domain:'58lianmeng.com'},
	{domain:'feitian001.com'},
	{domain:'caolianmeng.com'},
	{domain:'union.sogou.com'},
	{domain:'union.xunlei.com'},
	{domain:'union.ijinshan.com'},
	{domain:'guanggaolianmeng.net'},
	{domain:'associates.amazon.cn'},
	{domain:'d1rw.com'},
	{domain:'kumeng.cc'},
	{domain:'yiwad.com'},
	{domain:'tuite8.com'},
	{domain:'mkooad.com'},
	{domain:'cpm360.com'},
	{domain:'liaocpa.com'},
	{domain:'alimama.com'},
	{domain:'media.jd.com'},
	{domain:'adm.baidu.com'},
	{domain:'xinyoumeng.com'},
	{domain:'chinalian.com'},
	{domain:'1000re.com'},
	{domain:'union.1000re.com'},
	{domain:'qqku.com'},
	{domain:'91cu.com'},
	{domain:'xun.mobi'},
	{domain:'5iads.cn'},
	{domain:'uogo.net'},
	{domain:'wowgou.cn'},
	{domain:'zhcall.com'},
	{domain:'ssoolm.com'},
	{domain:'ad.qqku.com'},
	{domain:'10010lm.com'},
	{domain:'wangmeng.com'},
	{domain:'1325827506.com'},
	{domain:'eeeqi.cn'},
	{domain:'zun.mobi'},
	{domain:'adjwl.com'},
	{domain:'lmjia.com'},
	{domain:'ggads.com'},
	{domain:'is686.com'},
	{domain:'jieku.com'},
	{domain:'07171.com'},
	{domain:'youmi.net'},
	{domain:'xunchn.com'},
	{domain:'adsame.com'},
	{domain:'lianmeng.la'},
	{domain:'liangao.com'},
	{domain:'woyao998.com'},
	{domain:'union.qqx.com'},
	{domain:'2112.cc'},
	{domain:'wllm.hk'},
	{domain:'88lm.com'},
	{domain:'5tad.com'},
	{domain:'domob.cn'},
	{domain:'cpa001.cn'},
	{domain:'addlm.com'},
	{domain:'visvn.com'},
	{domain:'ti888.net'},
	{domain:'adurb.com'},
	{domain:'1588aa.com'},
	{domain:'zhchlm.com'},
	{domain:'unionli.com'},
	{domain:'ylunion.com'},
	{domain:'adfeiwo.com'},
	{domain:'17caifu.com'},
	{domain:'u.cnzol.com'},
	{domain:'zreading.cn'},
	{domain:'tsingliu.cn'},
	{domain:'u.admin5.com'},
	{domain:'lm.admin5.com'},
	{domain:'lianmengpk.cn'},
	{domain:'doudouguo.com'},
	{domain:'quqiaoqiao.com'},
	{domain:'union.itjxb.com'},
	{domain:'union.ichaotu.com'},
	{domain:'guanggaolianmeng.net'},
	{domain:'1w.cc'},
	{domain:'xn--4rr70v5ouxui.com'},
	{domain:'xsu.cc'},
	{domain:'ad8.cc'},
	{domain:'xsu.cc'},
	{domain:'hjlm.hk'},
	{domain:'91gg.cn'},
	{domain:'70e.com'},
	{domain:'u009.com'},
	{domain:'a3p4.com'},
	{domain:'uogo.net'},
	{domain:'7794.com'},
	{domain:'hxqu.com'},
	{domain:'14lm.com'},
	{domain:'7958.com'},
	{domain:'cpv6.com'},
	{domain:'youa.net'},
	{domain:'ulink.cc'},
	{domain:'6adj.com'},
	{domain:'6612.com'},
	{domain:'cpv6.com'},
	{domain:'9721.net'},
	{domain:'6adj.com'},
	{domain:'6dad.com'},
	{domain:'zyiis.com'},
	{domain:'ads80.com'},
	{domain:'lrswl.com'},
	{domain:'567lm.com'},
	{domain:'star8.net'},
	{domain:'adyun.com'},
	{domain:'xt918.com'},
	{domain:'xf999.com'},
	{domain:'999cm.com'},
	{domain:'999lm.com'},
	{domain:'youday.cn'},
	{domain:'xf999.com'},
	{domain:'998lm.com'},
	{domain:'yeapoo.cn'},
	{domain:'qiyou.com'},
	{domain:'7shun.com'},
	{domain:'wauee.com'},
	{domain:'zsj18.com'},
	{domain:'114lm.com'},
	{domain:'yiwad.com'},
	{domain:'lmphb.com'},
	{domain:'bodlm.com'},
	{domain:'qidou.com'},
	{domain:'umeng.com'},
	{domain:'shendu.cc'},
	{domain:'ytop8.com'},
	{domain:'addkm.com'},
	{domain:'nvwlm.com'},
	{domain:'admin9.ca'},
	{domain:'hzzlm.com'},
	{domain:'adsue.com'},
	{domain:'yigao.com'},
	{domain:'cnxad.com'},
	{domain:'tuigoo.com'},
	{domain:'juzilm.com'},
	{domain:'jidilm.com'},
	{domain:'unwzlm.com'},
	{domain:'ly2002.com'},
	{domain:'boyulm.com'},
	{domain:'yiqifa.com'},
	{domain:'9523cc.com'},
	{domain:'mediav.com'},
	{domain:'xinray.com'},
	{domain:'kuaibu.com'},
	{domain:'tiandi.com'},
	{domain:'ruyilm.com'},
	{domain:'onetad.com'},
	{domain:'heima8.com'},
	{domain:'my5058.com'},
	{domain:'admin6.com'},
	{domain:'adchina.cc'},
	{domain:'jzgglm.com'},
	{domain:'gaoduan.cc'},
	{domain:'naqigs.com'},
	{domain:'weiboyi.com'},
	{domain:'yiqiwin.com'},
	{domain:'chenggao.cn'},
	{domain:'dianxin.com'},
	{domain:'quantui.com'},
	{domain:'meidulm.com'},
	{domain:'ylunion.com'},
	{domain:'liangao.com'},
	{domain:'linktech.cn'},
	{domain:'youyilm.com'},
	{domain:'ttunion.com'},
	{domain:'lianmeng.la'},
	{domain:'ylunion.com'},
	{domain:'u.ctrip.com'},
	{domain:'adsmogo.com'},
	{domain:'100tone.com'},
	{domain:'ziyunlm.com'},
	{domain:'ffclick.com'},
	{domain:'100fenlm.cn'},
	{domain:'wyunion.com'},
	{domain:'ad.anzhi.com'},
	{domain:'weimeigg.com'},
	{domain:'wifiunion.cn'},
	{domain:'lingpao8.com'},
	{domain:'unionbig.com'},
	{domain:'yucmedia.com'},
	{domain:'union001.com'},
	{domain:'9lianmeng.com'},
	{domain:'yingchen69.cn'},
	{domain:'zs.admin5.com'},
	{domain:'toufangzhe.cn'},
	{domain:'clickvalue.cn'},
	{domain:'chaoyuelm.com'},
	{domain:'chanet.com.cn'},
	{domain:'alizhizhu.com'},
	{domain:'zhongxinlm.com'},
	{domain:'zhongyoulm.com'},
	{domain:'58chuanmei.com'},
	{domain:'union.baidu.com'},
	{domain:'cps.gome.com.cn'},
	{domain:'talkingdata.net'},
	{domain:'media.kouclo.com'},
	{domain:'zhaolianmeng.com'},
	{domain:'jiujiushishi.com'},
	{domain:'union.dianxin.com'},
	{domain:'icloud-analysis.com'},
	{domain:'icloud-diagnostics.com'},
	{domain:'init.icloud-analysis.com'},
	{domain:'init.icloud-diagnostics.com'},
	{domain:'hm.baidu.com'},
	{domain:'cbjs.baidu.com'},
	{domain:'cpro.baidu.com'},
	{domain:'cm.pos.baidu.com'},
	{domain:'lxss.sinaapp.com'},
	{domain:'rlogs.youdao.com'},
	{domain:'analytics.163.com'},
	{domain:'doubleclick.net'},
	{domain:'google-analytics.com'},
	{domain:'knet.cn'},
	{domain:'20ll.cn'},
	{domain:'52kmh.com'},
	{domain:'si9377.com'},
	{domain:'cslryy.com'},
	{domain:'52kmk.com'},
	{domain:'news.52kmh.com'},
	{domain:'ku9377.com'},
	{domain:'niuxgame77.com'},
	{domain:'ali37.net'},
	{domain:'js.users.51.la'},
	{domain:'gdt.qq.com'},
	{domain:'hm.l.qq.com'},
	{domain:'fodder.qq.com'},
	{domain:'adshmct.qq.com'},
	{domain:'adpro.cn'},
	{domain:'duomai.com'},
	{domain:'linktech.cn'},
	{domain:'adt100.com'},
	{domain:'lab42.com'},
	{domain:'114so.cn'},
	{domain:'sh.114so.cn'},
	{domain:'2345078.com'},
	{domain:'2345078.com'},
	{domain:'9377co.com'},
	{domain:'alimama.cn'},
	{domain:'g.163.com'},
	{domain:'g1.163.com'},
	{domain:'analytics.163.com'},
	{domain:'web.stat.ws.126.net'},
	{domain:'kingsoft.com'},
	{domain:'mlt01.com'},
	{domain:'optimix.asia'},
	{domain:'bznx.net'},
	{domain:'ipinyou.com'},
	{domain:'tanx.com'},
	{domain:'miaozhen.com'},
	{domain:'allyes.cn'},
	{domain:'allyes.com'},
	{domain:'allyes.com.cn'},
	{domain:'icybercode.com'},
	{domain:'gj.qq.com'},
	{domain:'dratio.com'},
	{domain:'duba.net'},
	{domain:'ijinshan.com'},
	{domain:'sp.cc'},
	{domain:'p0y.cn'},
	{domain:'38ra.com'},
	{domain:'88rpg.net'},
	{domain:'9377os.com'},
	{domain:'youle55.com'},
	{domain:'s22.cnzz.com'},
	{domain:'surefile.org'},
	{domain:'sspadsoon.com'},
	{domain:'gridsumdissector.com'},
	{domain:'nfdnserror14.wo.com.cn'},
	{domain:'cookiemapping.wrating.com'}
];

// whiteList (root domain) for block digital domain
var whiteList = [
	'6.cn',
	'12306.cn',
	'189.cn',
	'10086.cn',
	'10010.cn',
	'10010.com',
	'126.com',
	'163.fm',
	'163.com',
	'360.cn',
	'360.com'
];


function FindProxyForURL(url, host){
	var direct = 'DIRECT;';

	var proxy = '127.0.0.1:80';
	var block = '0.0.0.0:80';
	
	if(shExpMatch(host, '10.[0-9]+.[0-9]+.[0-9]+')) return direct;
	if(shExpMatch(host, '172.[0-9]+.[0-9]+.[0-9]+')) return direct;
	if(shExpMatch(host, '192.168.[0-9]+.[0-9]+')) return direct;
	if(shExpMatch(host, '127.0.0.1')) return direct;
	if(shExpMatch(host, 'localhost')) return direct;
	if(shExpMatch(host, 'dl.google.com')) return direct;

	if(config.blackList){
		// block by blackList
		for(i in blackList){
			if(blackList[i].url){
				// block by url(keyword)
				if(url.indexOf(blackList[i].url) > -1){
					return 'PROXY '+ block +';';
				};
			};
			if(blackList[i].domain){
				// block by domain
				if(dnsDomainIs(host, blackList[i].domain)){
					return 'PROXY '+ block +';';
				};
			};
		};
	};

	if(config.digitalDomain){
		// block by digital domain && bypass whiteList
		var reg = /^([^.]+\.)*(\d+)(\.[^.]+)$/gi;
		if(reg.exec(host) && whiteList.indexOf(RegExp.$2 + RegExp.$3) < 0){
			return 'PROXY '+ block +';';
		};
	};

	if(config.hosts){
		// proxy by hostsList
		for(i in hostsList){
			if(dnsDomainIs(host, hostsList[i].domain)){
				return 'PROXY '+ (hostsList[i].ip ? hostsList[i].ip : proxy) +';';
			};
		};
	};

	return direct;
}

