const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: 'Love You Like Water (Live)',
            artist: 'Shing02',
            url: 'http://music.163.com/song/media/outer/url?id=35470655.mp3',
            cover: 'http://p2.music.126.net/tKxgqSMdBznn_lD73FDCDw==/3321624628754498.jpg?param=130y130',
            lrc: '/./dist/music/lrc/29751409.lrc',
            theme: '#46718b'
        },
        {
            name: 'Luv (Sic) [Live]',
            artist: 'Shing02',
            url: 'http://music.163.com/song/media/outer/url?id=35470654.mp3',
            cover: 'http://p2.music.126.net/tKxgqSMdBznn_lD73FDCDw==/3321624628754498.jpg?param=130y130',
            theme: '#46718b'
        },
		{
            name: 'Luv (sic) pt2',
            artist: 'Nujabes/Shing02',
            url: 'http://music.163.com/song/media/outer/url?id=405485936.mp3',
            cover: 'http://p2.music.126.net/eCwqkzO8s1sXQx2GO9dGlA==/109951165557621654.jpg?param=130y130',
            theme: '#46718b'
        },
		{
            name: 'Nagusame (Live)',
            artist: 'Shing02',
            url: 'http://music.163.com/song/media/outer/url?id=35470658.mp3',
            cover: 'http://p2.music.126.net/tKxgqSMdBznn_lD73FDCDw==/3321624628754498.jpg?param=130y130',
	    theme: '#46718b'
        },
		{
            name: 'Shiori (Live)',
            artist: 'Shing02',
            url: 'http://music.163.com/song/media/outer/url?id=35470656.mp3',
            cover: 'http://p1.music.126.net/tKxgqSMdBznn_lD73FDCDw==/3321624628754498.jpg?param=130y130',
	    theme: '#46718b'
        },
		{
            name: 'Sunday Am',
            artist: 'Shing02',
            url: 'http://music.163.com/song/media/outer/url?id=514520.mp3',
            cover: 'http://p2.music.126.net/oW87L7-4p_ql3JL3hy1zeg==/2288083697468532.jpg?param=130y130',
            theme: '#46718b'
        }
    ]
});