require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
var imagesDatas=require('../data/imageDatas.json');

//利用函数自执行，将图片名信息转换成图片URL路径信息
function genImageURL(imageDatasArr){
  for(var i=0; i<imageDatasArr.length; i++){
    var singleImageData=imageDatasArr[i];

    singleImageData.imageURL=require('../images/'+singleImageData.filename);
    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
}

var imagesDatas=genImageURL(imagesDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
