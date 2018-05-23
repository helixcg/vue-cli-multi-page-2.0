	<group>
		<cell v-for="el in list" :key="el.id" :title="el.name" value="" is-link :link="el.url"></cell>
	</group>
	<div class="note">
		<p>这里仅展示几个VUE UI的demo，更多组件demo请访问vux UI官网，官网地址：
			<a href="https://vux.li" target="_blank">https://vux.li</a>
		</p>
	</div>
	<div>
		<divider>多页面 vue-router 2</divider>
	    <group>
			<cell title="多页面路由" value="" is-link link="../router/details.html"></cell>
		</group>
	</div>

	<div class="martop15">
	<divider>iconfont 字体</divider>
    <group>
		<cell title="iconfont图标展示" value="" is-link link="../iconfont/list.html"></cell>
	</group>
	</div>

	<div class="martop15">
	<divider>其他</divider>
    <group>
		<cell title="自定义vue全局过滤器" value="" is-link link="../tools/vuefilter.html"></cell>
		<cell title="模块下放静态文件" value="" is-link link="../tools/bigimage.html"></cell>
		<cell title="ajax" value="" is-link link="../tools/ajax.html"></cell>
		<cell title="获取url参数" value="" is-link link="../tools/getQuery.html?goodsid=1688&shopid=25"></cell>
	</group>
	</div>