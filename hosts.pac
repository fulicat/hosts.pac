/**
 * hosts.pac
 * @authors Jack.Chan
 * @date    2015-09-23 14:58:50
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
	{domain:'gj.qq.com'},
	{url:'http://bbs.hbqc.com/ad/'},
	{url:'http://www.dygang.com/d/'},
	{url:'http://news.52kmh.com'},
	{url:'http://analytics.163.com'},
	{url:'http://rlogs.youdao.com'},
	{url:'http://58.215.179.159/'},
	{url:'google-analytics.com'},
	{url:'doubleclick.net'},
	{url:'hm.baidu.com'},
	{url:'cbjs.baidu.com'},
	{url:'cpro.baidu.com'},
	{url:'cm.pos.baidu.com'},
	{url:'lxss.sinaapp.com'},
	{url:'knet.cn'},
	{url:'si9377.com'},
	{url:'cslryy.com'},
	{url:'20ll.cn'},
	{url:'52kmh.com'},
	{url:'52kmk.com'},
	{url:'ku9377.com'},
	{url:'niuxgame77.com'},
	{url:'ali37.net'},
	{url:'js.users.51.la'},
	{url:'gdt.qq.com'},
	{url:'hm.l.qq.com'},
	{url:'fodder.qq.com'},
	{url:'adshmct.qq.com'},
	{url:'adpro.cn'},
	{url:'duomai.com'},
	{url:'linktech.cn'},
	{url:'adt100.com'},
	{url:'lab42.com'},
	{url:'sh.114so.cn'},
	{url:'nfdnserror14.wo.com.cn'},
	{url:'2345078.com'},
	{url:'9377co.com'},
	{url:'alimama.cn'},
	{url:'http://g.163.com'},
	{url:'analytics.163.com'},
	{url:'web.stat.ws.126.net'},
	{url:'kingsoft.com'},
	{url:'mlt01.com'},
	{url:'optimix.asia'},
	{url:'bznx.net'},
	{url:'icybercode.com'},
	{url:'gridsumdissector.com'},
	{url:'ipinyou.com'},
	{url:'tanx.com'},
	{url:'miaozhen.com'},
	{url:'allyes.com'},
	{url:'allyes.com.cn'},
	{url:'sp.cc'},
	{url:'p0y.cn'},
	{url:'sspadsoon.com'},
	{url:'dratio.com'},
	{url:'cookiemapping.wrating.com'},
	{url:'88rpg.net'},
	{url:'38ra.com'},
	{url:'9377os.com'},
	{url:'youle55.com'},
	{url:'duba.net'},
	{url:'ijinshan.com'},
	{url:'s22.cnzz.com'},
	{url:'surefile.org'}
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

