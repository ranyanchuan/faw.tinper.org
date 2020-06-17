const downloadRe = require('download-git-repo');
const fs = require('fs-extra');


fs.removeSync('./componentsDemos')

downloadRe(`iuap-design/mobile-demo`,`componentsDemos`,
        function (error) {
            if (error) {
                console.log(`❌ download 失败！` + error);
            }else{
                console.log(`😀 download 成功！`)
            }
        })

