/* JavaScript handling */

//$(document).ready();
$(document).ready(function() {	// selection modification
  var $this = $(��div.scroll-div��);//����Ҫ�󶨵�div����
  var scrollTimer;
  $this.hover(function(){
     clearInterval(scrollTimer);//���ŵ������ʱ��ֹͣ
   },function(){
     scrollTimer = setInterval(function(){
       scrollPic( $this );
     }, 30);
  }).trigger(��mouseleave��);//����֮��ʼ����
 });
 
 function scrollPic(obj){//��������
  var $self = obj.find(��ul:first��);
  var ulWidth = $self.find(��li:first��).width();
  var ulLeft = parseInt($self.css(��left��));
  //css()������õ����ַ���������λ�����硱*px����������parseInt����ǿ��ת����������
  //alert(ulLeft);
  if(ulLeft != (-ulWidth)){
   ulLeft�C;
   $self.css(��left��,ulLeft+��px��);
   //alert(liLeft);
  }else{
   $self.css(��left��,��0��).find(��li:first��).appendTo($self);
   //���Ѿ��Ƴ���Ļ��li�ŵ�����list����������Ϳ���ʵ���޷������
  }
 }
	
});



