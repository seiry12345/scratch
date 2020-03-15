<sort-select
          :sort-items="sortData"
          v-on:sort-on-select="sortGoods"
        />
        
        
        <good-card v-for="good in getGoods" :key="good.id" :good="good"/>




data() {
			return {
				categoryName: null,
				services: [],
				breadcrumbs: null,
				meta: null,
        sortedGoods: [],
				sortData: [
					{
						text: 'По цене',
            class: 'product-filter-button',
						filterBy: 'priceUp'
					},
					{
						text: 'По цене',
						class: 'product-filter-button product-filter-button--down',
						filterBy: 'priceDown'
					},
					{
						text: 'По популярности',
						class: 'product-filter-button',
						filterBy: 'ratingUp'
					},
					{
						text: 'По популярности',
						class: 'product-filter-button product-filter-button--down',
						filterBy: 'ratingDown'
					},
				],
			}
		},
    methods: {
			sortGoods(filterBy) {
				let servicesCopy = [...this.services];

				if (filterBy === 'priceUp') {
					this.sortedGoods = servicesCopy.sort((a, b) => {
						return a.price - b.price;
					});
        } else if (filterBy === 'priceDown') {
					this.sortedGoods = servicesCopy.sort((a, b) => {
						return b.price - a.price;
					});
        } else if (filterBy === 'ratingUp') {
					this.sortedGoods = servicesCopy.sort((a, b) => {
						return a['reviews_count'] - b['reviews_count'];
					});
				} else if (filterBy === 'ratingDown') {
					this.sortedGoods = servicesCopy.sort((a, b) => {
						return b['reviews_count'] - a['reviews_count'];
					});
				}
      }
    },
    computed: {
			getGoods() {
				if (this.sortedGoods.length) {
					return this.sortedGoods;
        }

				return this.services;
      }
    },
