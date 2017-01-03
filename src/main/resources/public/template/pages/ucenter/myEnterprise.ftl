<@compress>
<#escape x as x?html>
<#include "../../common/macro.ftl">
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>个人信息</title>
<link href="/dist/static/css/core.css?a781d1da7b3db0d7699b" rel="stylesheet"><link href="/dist/static/css/myEnterprise.css?a781d1da7b3db0d7699b" rel="stylesheet"></head>
<body class="g-doc">
  	<div class="g-hd">
        <@topbar />
        <div class="m-header">
          <div class="m-logo"></div>
          <div class="m-nav"></div>
        </div>
    </div>
    <div class="g-bd f-cb">
      <@ucenterNav/>
      <div class="m-ucenter-content">
      	<div id="app"></div>
      </div>
    </div>
  	<div class="g-ft">
  		<@footer />
  	</div>
    <#noescape>
      <script>
      
      </script>
    </#noescape>
<script type="text/javascript" src="/dist/static/js/core.js?a781d1da7b3db0d7699b"></script><script type="text/javascript" src="/dist/static/js/myEnterprise.js?a781d1da7b3db0d7699b"></script></body>
</html>
</#escape>
</@compress>
