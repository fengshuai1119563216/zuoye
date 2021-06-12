###### 本系统采用 angular2.0+springboot+mybatis开发 ,使用MySql数据库 ，并使用nginx将8890端口监听定向到项目所在端口8889实现了反向代理功能。 ######
###### 在开发过程中我尝试了两种部署方式,第一种为前后端分离模式,第二种为将angular集成到spring boot项目的静态资源并打包成jar包的方式: ######
###### &emsp;&emsp;1.前后端分离模式,使用 ng serve将前端部署到 4200端口 ,使用 spring boot 入口函数将项目部署到 8889端口。 ######
###### &emsp;&emsp;2.集成方式,将angualr2代码打包,放入spring boot的静态资源中。 ######
### 说明:spring boot 为集成模式的项目代码 ，spring boot-back,angular -cli为前后端分离模式代码。 ###
