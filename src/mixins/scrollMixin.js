import { mapState } from 'vuex';

export function scrollMixin(callback) {
  return {
    computed: {
      ...mapState('scroll', ['body']),
    },
    mounted() {
      if (this.body) {
        this.body.scrollTop = 0;
      }
      if (callback) {
        this.body?.addEventListener('scroll', this.scrollEvent);
      }
    },
    beforeUnmount() {
      if (callback) {
        this.body?.removeEventListener('scroll', this.scrollEvent);
      }
    },
    methods: {
      scrollEvent() {
        if (this.verifyBottom()) {
          this[callback]();
        }
      },
      verifyBottom() {
        const scrollY = this.body?.scrollTop || 0; // Obtener la posición actual del scroll vertical
        const alturaTotal = this.body?.scrollHeight || 0; // Altura total del contenido de la página
        const alturaVentana = window.innerHeight; // Altura visible del navegador

        // Si la suma de la posición actual del scroll y la altura visible del navegador es mayor o igual a la altura total,
        // entonces hemos alcanzado el tope de abajo
        return scrollY + alturaVentana >= alturaTotal - 500;
      },
    },
  };
}
