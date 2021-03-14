var app=angular.module('myApp',[]);
app.controller('myController',function($scope){
    $scope.trees=[
        {
            name: 'e2e',
            children:[{name:'e2e.component.ts'}],
            visible: false
        },
        {
            name: 'node_modules',
            children: [{name:'node_modules.component.ts'}],
            visible: false
        },
        {
            name: 'src',
            children: [
                    {name:'app',
                    children:[
                        {name:'treeview.component.css'},
                        {name:'treeview.component.html'},
                        {name:'treeview.component.spec.ts'},
                        {name:'treeview.component.ts'},
                        {name:'treeview.module.ts'}
                    ],
                    visible:true
                    },
                    {name:'app.component.css',
                    children:[
                            {name:'app.treeview.component.css'}
                            ],
                    visible: false
                    },
                    {name:'app.component.html',
                    children:[
                        {name:'app.treeview.component.html'}
                        ],
                    visible: false
                    },
                    {name:'app.component.spec.ts',
                    children:[
                        {name:'app.treeview.component.spec.ts'}
                        ],
                    visible: false
                    },
                    {name:'app.component.ts',
                    children:[
                        {name:'app.treeview.component.tc'}
                        ],
                    visible: false
                    },
                    {name:'app.module.ts',
                    children:[
                        {name:'app.treeview.module.ts'}
                        ],
                    visible: false
                    },    
            ],        
            visible: true
        }
    ]
    $scope.rotate= {
        true: 'rotate'
    }

})