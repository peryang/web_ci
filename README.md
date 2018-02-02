# web_ci
web_ci
一个基于node的express的http服务，其中包含用户校验，session校验。

在public内部署自己的静态资源

html引入

``` html
  <script>
    if(window.location.search.indexOf("web_ci") > 0){
      document.write('<script type="text/javascript" src="/js/checkAuth.js"><\/script>');
    }
  </script>
```

/js/checkAuth.js 为web_ci项目的express主目录下的用户校验函数
