// 使用jsx 递归导航菜单
import { MenuItem } from "./types";
import { defineComponent, PropType, render, useAttrs } from "vue";
import { formatCamel } from "@/utils";
import * as Icons from "@element-plus/icons-vue";
export default defineComponent({
	props: {
		// 导航列表数据
		navList: {
			type: Array as PropType<MenuItem[]>,
			require: true,
		},
		// 默认选中
		defaultActive: {
			type: String,
			default: "",
		},
		// 路由
		router: {
			type: Boolean,
			default: true,
		},
		// 属性名称
		icon: {
			type: String,
			default: "icon",
		},
		name: {
			type: String,
			default: "name",
		},
		index: {
			type: String,
			default: "index",
		},
		children: {
			type: String,
			default: "children",
		},
		className: {
			type: String,
		},
	},

	setup(props, ctx) {
		// attrs
		const $attrs = useAttrs();

		const renderMenu = (data: any) => {
			return data.map((item: any) => {
				// 处理图标名
				// console.log(item.icon);
				// console.log(`el-icon${formatCamel(item.icon)}`);

				// 默认齿轮图标
				const icon = () => {				
          const _icon = item.icon ? (Icons as any)[item[props.icon!]] : (Icons as any)["Setting"];
					return (
						<>
							<el-icon>
                <_icon/>
							</el-icon>
							<span> {item[props.name]} </span>
						</>
					);
				};
				// 插槽
				const slots = {
					title: () => {
						return icon();
					},
				};

				// 如果有子数组,递归渲染
				if (item[props.children] && item[props.children].length) {
					return (
						<el-sub-menu index={item[props.index]} v-slots={slots}>
							{renderMenu(item[props.children])}
						</el-sub-menu>
					);
				}

				// else {
				// 没有子数组
				return (
					// 渲染单个项目
					<el-menu-item index={item[props.index]}>
            {icon()}
					</el-menu-item>
				);
				// }
			});
		};

		return () => {
			return (
				// JSX
				<el-menu defaultActive={props.defaultActive} router={props.router} {...$attrs} class={props.className}>
					{renderMenu(props.navList)}
				</el-menu>
			);
		};
	},
});
