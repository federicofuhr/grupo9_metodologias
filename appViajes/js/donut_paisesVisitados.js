Morris.Donut({
  element: 'graph',
  data: [
    {value: 1, label: 'Viaje 1'},
    {value: 3, label: 'Viaje 2'},
    {value: 2, label: 'Viaje 3'},
    {value: 1, label: 'Viaje 4'},
    {value: 3, label: 'Viaje 5'}
  ],
  backgroundColor: '#ccc',
  labelColor: '#060',
  colors: [
    '#0BA462',
    '#39B580',
    '#67C69D',
    '#95D7BB'
  ],
  formatter: function (x) { return x + " paises visitados."}
});