<template>
  <router-view :brews='brews'></router-view>
</template>

<script>
export default {
  data() {
    return {
      createBrew: [{ brewMethod: 'd', bean: 'ds' }],
      brewMethods: [
        { id: 1, grams: '33g', water: '500ml', purity: 'Coarse', time: '4min', svg: '#french', name: 'FRENCH PRESS', image: '/AearoPressBrew.jpg' },
        { id: 2, grams: '40g', water: '200ml', purity: 'Coarse', time: '2timer', svg: '#infusion', name: 'COLD INFUSION', image: '/ColdBrew.jpg' },
        { id: 3, grams: '16g', water: '230ml', purity: 'Fine', time: '3min', svg: '#chemex', name: 'CHEMEX', image: '/ColdBrew.jpg' },
        { id: 4, grams: '16g', water: '230ml', purity: 'Fine', time: '3min', svg: '#kalita', name: 'KALITA WAVE', image: '/AearoPressBrew.jpg' }
      ],
      beans: [
        { id: 1, title: 'Kieni Espresso', roaster: 'Coffee Collective' },
        { id: 2, title: 'Kieni', roaster: 'Coffee Collective' }
      ],
      brews: [
        { 
          method: { id: 2, grams: '40g', water: '200ml', purity: 'Coarse', time: '2timer', svg: '#infusion', name: 'COLD INFUSION', image: '/ColdBrew.jpg' }, 
          bean: { id: 1, title: 'Kieni Espresso', roaster: 'Coffee Collective' },
          id: '1'
        },
        
      ]
    };
  },
};
</script>
