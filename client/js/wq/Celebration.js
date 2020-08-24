$.ajax({
    url: 'http://localhost:3000/getData',
    type: 'get',
    data: {
        type: '活动庆典',
    },
    success: (data) => {

        var html = ''

        // 初始页面添加图片
        data.data.forEach((item, index) => {

            var src = eval('(' + item.imgsrc + ')')

            html = `
            <h2 class="Celebration-CCTitle">${item.type}</h2>
            <img class="Celebration-CCTPic" src='${src}'>
            `

            $('.Celebration-CCont').eq(index).html(html)
        });

        $('.Celebration-Plist').on('click', function () {

            var start = ($(this).text() - 1) * 6;
            var end = $(this).text() * 6 - 1;
            var html1;
            var j = 0;

            for (var i = start; i <= end; i++) {
                if (j > 5) {
                    j = 0
                }

                html1 = `
                 <h2 class="Celebration-CCTitle">${data.data[i].type}</h2>
                  <img class="Celebration-CCTPic" src='${eval('(' + data.data[i].imgsrc + ')')}'>
                 `

                $('.Celebration-CCont').eq(j).html(html1)
                // 添加移除类名
                $('.Celebration-Plist').removeClass('Celebration-PLcolor').eq($('.Celebration-Plist').index(this)).addClass('Celebration-PLcolor')

                if($('.Celebration-Plist').index(this) == 0){
                   $('.Celebration-PPrevious').addClass('Celebration-PPRpublic')
                }else{
                    $('.Celebration-PPrevious').removeClass('Celebration-PPRpublic')
                }
                
               
                j++
            }

        })

    }
})