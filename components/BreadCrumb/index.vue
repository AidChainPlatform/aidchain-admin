<template>
  <div>
    <div
      :class="containerClass"
      :style="containerStyle"
      class="ml-4 flex w-fit justify-between font-circular text-sm font-normal mb-4 capitalize text-[#94A3B8]"
    >
      <h2
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        :style="
          index === breadcrumbs.length - 1
            ? `color:${current}`
            : `color:${last}`
        "
      >
        <nuxt-link :to="crumb.path">
          {{ crumb.name }}
          <span
            v-if="index !== breadcrumbs.length - 1"
            class="mx-1"
            :text="`text-${slash}`"
          >
            /
          </span>
        </nuxt-link>
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  containerClass: {
    type: String,
    default: "",
  },
  containerStyle: {
    type: String,
    default: "",
  },
  current: {
    type: String,
    default: "#384860",
  },
  last: {
    type: String,
    default: "#94A3B8",
  },
  slash: {
    type: String,
    default: "",
  },
})

// refs
const breadcrumbs = ref([])
const route = useRoute()

// functions
const createBreadCrumb = () => {
  const routeArray = route.path.split("/")
  const allRoutes: any = [];

  routeArray.reduce((accm: any, pathName: any, index: any, arr: any) => {
    const routePaths = [];
    for (let i = 0; i < index; i++) {
      routePaths.push(routeArray[i] + "/");
    }
    const path = routePaths
      .join("")
      .replaceAll("//", "/") + pathName;

    const name = pathName;
    return allRoutes.push({ name, path });
  }, "/");

  allRoutes.splice(0, 1);
  breadcrumbs.value = allRoutes;
  return breadcrumbs.value;
}


// 
onBeforeMount(() => createBreadCrumb()) 
</script>

<style lang="scss" scoped></style>
