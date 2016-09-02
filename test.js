var Direct={
    down:0,
    sUp:1,
    left:2,
    sDown:3,
    stop:-1
};
function MyTest(n) {
    //js二维数组
    var a = new Array(n);
    for (var i = 0; i < n; i++) {
        a[i] = new Array(n);
        for (var j = 0; j < n; j++)
            a[i][j] = 0;
    }
    //特殊情况
    if (n == 1) return a;
    if (n ==2) {
        a[0][0] = 1; a[1][0] = 2;
        a[0][1] = 3;a[1][1] = 4;
    }
    //变量初始化
    var i = 0, j = 0, flag = Direct.down, count = 1;
    a[0][0] = 1;
    //求上斜上角型
    var len=n-1;
    while (i < len && j < len) {
        switch (flag) {
            case Direct.down: //直下1个
            {
                a[++i][j] = ++count;
                flag = Direct.sUp;
            }
            case Direct.sUp:
            {
                if (i == len) {
                    flag = Direct.stop;
                } else {
                    flag = Direct.left;
                }
                while (i > 0) {
                    a[--i][++j] = ++count;
                }
                if(flag==Direct.stop){
                    break;
                }


            }
            case Direct.left:
            {
                a[i][++j] = ++count;
                flag = Direct.sDown;
            }
            case Direct.sDown:
            {
                while (j > 0) {
                    a[++i][--j] = ++count;
                }
                flag = Direct.down;
                break;
            }
            default: { }
        }
    }
    //根据a[i][j]+a[n-i][n-j]=a[0][0]+a[n][n]=1+n*n;求斜下三角型
    var sM = 1 + n * n;
    for (i = 1; i <= len; i++)
        for (j = 0; j < i; j++) {
            a[i][len - j] = sM - a[len - i][j];
        }


    //打印
    for (i = 0; i < n; i++) {
        var tmp = [];
        console.log('\n');
        for (j = 0; j < n; j++)
            tmp.push(a[i][j]);
        console.log(tmp.join("   "));
    }


}

console.log(MyTest(3));