<@compress>
<#escape x as x?html>
<#include "../common/macro.ftl">
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>登录</title>
</head>
<body class="g-doc">
  	<div class="g-hd">
        <@topbar />
        <div class="m-header">
          <div class="m-logo"></div>
          <div class="m-nav"></div>
        </div>
    </div>
    <div class="bd-banner">
	  	<div class="g-bd">
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
</body>
</html>
</#escape>
</@compress>
