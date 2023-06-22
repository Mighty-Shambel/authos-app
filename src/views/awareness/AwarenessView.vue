<template>
  <div v-if="data" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:flex">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 rounded-lg p-5 pt-5">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-grid-cols-2 pt-12">
          <div>
            <img :src="data.image" class="lg:pt-24">
          </div>
          <div class="lg:pl-10 pb-7">
            <h1 class="text-xl font-semibold pb-2 pt-10">{{ data.title }}</h1>
            <div v-if="Array.isArray(data.detail)">
              <template v-for="(detail, index) in data.detail">
                <ul class=" shadow-lg rounded-md p-5 mb-5">
                  <li :key="index">
                    <template v-for="(value, key) in detail">
                      <strong>{{ key }}:</strong> {{ value }}
                      <br> <!-- Add a line break for spacing -->
                    </template>
                  </li>
                </ul>
              </template>
            </div>
            <div v-else>
              <p>{{ data.detail }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-10 lg:pt-24 bg-slate-50">
        <h1 class="font-semibold pb-4 text-xl">Related Contents</h1>
        <div v-for="awareness in filteredArticles" :key="awareness.id" @click="navigateToAwareness(awareness.id)" class="grid grid-cols-2 mb-5 shadow md w-96 md:w-48 lg:w-96 bg-white rounded md">
          <div>
            <img :src="awareness.image" class="rounded-md">
          </div>
          <div class="pt-2 pr-5">
            <h1 class="pl-5">{{ awareness.title }}</h1>
            <p class="text-slate-500 pl-5">{{ awareness.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="grid grid-cols-1 place-items-center py-72">
    <p class="text-2xl">Page Not Found</p>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, onBeforeMount, computed, watch } from 'vue';
import Data from '../../data.json';
import { useStore } from 'vuex';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const data = ref(null);
    const { id } = route.params;
    const store = useStore();

    onBeforeMount(() => {
      const item = Data.find((c) => c.id === parseInt(id));
      if (item) {
        data.value = item;
      } else {
        data.value = null;
      }
    });

    // Compute filtered articles excluding the current article
    const filteredArticles = computed(() => {
      if (data.value) {
        return Data.filter((awareness) => awareness.id !== data.value.id);
      }
      return [];
    });

    // Function to navigate to the awareness page
    const navigateToAwareness = (awarenessId) => {
      router.push(`/awareness/${awarenessId}`);
    };

    // Watch for changes in the id route parameter
    watch(
      () => route.params.id,
      (newId) => {
        const item = Data.find((c) => c.id === parseInt(newId));
        if (item) {
          data.value = item;
        } else {
          data.value = null;
        }
      }
    );

    return {
      data,
      filteredArticles,
      navigateToAwareness
    };
  }
};
</script>