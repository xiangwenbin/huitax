<@compress single_line=true>
<#escape x as x?html>
<#include "../common/macro.ftl">
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>首页</title>
<link href="/dist/static/css/core.css?a781d1da7b3db0d7699b" rel="stylesheet"><link href="/dist/static/css/index.css?a781d1da7b3db0d7699b" rel="stylesheet"></head>
<body class="g-doc">
    <div class="g-hd">
        <@topbar />
        <div class="m-header">
          <div class="m-logo"></div>
          <div class="m-nav"></div>
        </div>
    </div>
    <div class="g-bd">
      <div id="app"></div>
    </div>
  	<div class="g-ft">
  		<@footer />
  	</div>
   <#noescape>
    <script>
     
    </script>
  </#noescape>
<script type="text/javascript" src="/dist/static/js/core.js?a781d1da7b3db0d7699b"></script><script type="text/javascript" src="/dist/static/js/index.js?a781d1da7b3db0d7699b"></script></body>
</html>
</#escape>
</@compress>
