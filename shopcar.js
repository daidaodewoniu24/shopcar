var goods=[{name:"苹果",price:"3"},{name:"梨",price:"4"},
			{name:"香蕉",price:"2"},{name:"西瓜",price:"5"},
			{name:"橘子",price:"4"},{name:"葡萄",price:"7"}
]
var app=angular.module("app",[]);
app.controller("aa",function($scope){
	$scope.good=goods;
	$scope.cc=[];
	$scope.buy=function(i){
		if($scope.cc.length>0){
			var flag=true;
			angular.forEach($scope.cc,function(obj,index){
				if($scope.good[i].name==obj.name){
					$scope.cc[index].num++;
					flag=false;
				}
			})
			if (!flag) {
				return;
			};
		}
		var o={};
		o.name=$scope.good[i].name;
		o.price=$scope.good[i].price;
		o.num=1;
		$scope.cc.push(o);
		
	}
	$scope.add=function(name){
		angular.forEach($scope.cc,function(o,i){
			if(o.name==name){
				$scope.cc[i].num++;
			}
		})
	}
	$scope.jian=function(name){
		angular.forEach($scope.cc,function(o,i){
			if(o.name==name){
				$scope.cc[i].num--;
				if($scope.cc[i].num<=0){
					var d=confirm("是否删除");
					if(d){
						$scope.del(name);
					}
				}
			}
		})
	}	
	$scope.del=function(name){
		angular.forEach($scope.cc,function(o,i){
			if(o.name==name){				
				$scope.cc.splice(i,1);
			}
		})
	}
	$scope.sum=function(){
		var s=0;
		angular.forEach($scope.cc,function(obj,index){
			s+=obj.num*obj.price;
		})
		return s;
	}
	$scope.ff=false;
	$scope.order=function(p){
		$scope.ff=!$scope.ff;
		$scope.px=p;
	}

	$scope.$watch("cc",function(newVal,oldVal){
		for(var i=0;i<newVal.length;i++){
			$scope.cc[i].sum=$scope.cc[i].num*$scope.cc[i].price;
		}
	},true)
	$scope.gg=false;
	$scope.jg=function(p){
		$scope.gg=!$scope.gg;
		$scope.pxx=p;
	}
})