<script>
// import 'vue-good-table/dist/vue-good-table.css'
// import { VueGoodTable } from 'vue-good-table';
// https://borisflesch.github.io/vue-good-table-next/guide/advanced/#result
export default {
  setup() {
    const testData = [
      {
        order_id: 1,
        customer_name: 'Bob NewHart',
        qty: 10,
        product_name: 'Hats',
        variation:
          '[{"id": 35, "key": "choose-your-cake", "value": "Naked"}, {"id": 36, "key": "choose-sugar", "value": "Yes"}]',
      },
      {
        order_id: 2,
        customer_name: 'Mary Lamb',
        qty: 10,
        product_name: 'Necklaces',
        variation:
          '[{"id": 35, "key": "choose-your-cake", "value": "Naked"}, {"id": 36, "key": "choose-sugar", "value": "Yes"}]',
      },
    ];
    const columns = [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Age',
        field: 'age',
        type: 'number',
      },
      {
        label: 'Created On',
        field: 'createdAt',
        type: 'date',
        dateInputFormat: 'yyyy-MM-dd',
        dateOutputFormat: 'MMM do yy',
      },
      {
        label: 'Percent',
        field: 'score',
        type: 'percentage',
      },
    ];
    const rows = [
      {
        id: 1, name: 'John', age: 20, createdAt: '2022-02-02', score: 0.03343,
      },
      {
        id: 2, name: 'Jane', age: 24, createdAt: '2011-10-31', score: 0.03343,
      },
      {
        id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: 0.03343,
      },
      {
        id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: 0.03343,
      },
      {
        id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: 0.03343,
      },
      {
        id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343,
      },
    ];

    return {
      // VueGoodTable,
      columns,
      rows,
    };
  },
};
</script>

<template>
  <div class="pt-10 px-10">
    <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"
      >Dashboard</span
    >
  </div>

  <div class="pt-6 px-4">
    <div class="w-full mx-4">
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <p class="text-base font-normal text-gray-500 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus
          quibusdam dolore, vitae expedita ipsam quisquam hic in possimus eveniet eos
          explicabo dolorum aspernat ur qui magnam. Deleniti ipsa at aliquid.
        </p>
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :search-options="{
            enabled: true,
          }"
          :pagination-options="{
            enabled: true,
            perPageDropdown: [3, 7, 9],
          }"
          styleClass="vgt-table striped bordered condensed"
        />
      </div>
    </div>
  </div>
</template>
