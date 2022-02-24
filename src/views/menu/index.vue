<template>
  <my-menu :navList="menuData" defaultActive="2" name="title" className="my-menu-demo"></my-menu>
</template>


<script lang="ts" setup>
const menuData = [
  {
    icon: "Location",
    title: 'menu1',
    index: '1',
  },
  {
    icon: "",
    title: 'menu12',
    index: '2',
  },
  {
    icon: "",
    title: 'menu13',
    index: '3',
    children: [
      {
        icon: "",
        title: 'menu21',
        index: '21',
      },
      {
        icon: "Location",
        title: 'menu22',
        index: '22',
        children: [
          {
            icon: "",
            title: 'menu31',
            index: '31',
          },
        ]
      },
    ]
  },
]

</script>