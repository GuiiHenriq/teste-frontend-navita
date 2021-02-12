<template>
  <main class="list-cars">
    <div class="container">
      <h2>Veículos</h2>

      <section class="list-cars__brands-box">
        <aside class="list-cars__brands-box--title">
          <h3>Marcas</h3>
        </aside>

        <div class="list-cars__brands-box--infos">
          <h4>Marca</h4>

          <ul>
            <li v-for="(car, index) in carsData" :key="index" class="list-cars__box-infos--car">
              <p>{{car.nome}}</p>

              <button :class="{ active: index === activeItem}" @click.prevent="getModelsCars(car.codigo, index)">Ver modelos</button>
            </li>
          </ul>
        </div>
      </section>

      <section class="list-cars__models-box" v-if="modelsData">
        <aside class="list-cars__models-box--title">
          <h3>Modelos</h3>
        </aside>

        <div class="list-cars__models-box--infos">
          <h4>Modelo</h4>

          <ul>
            <li v-for="(model, index) in modelsData" :key="index" class="list-cars__box-infos--car">
              <p>{{model.nome}}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: 'CarsList',
  data() {
    return {
      carsData: null,
      modelsData: null,
      activeItem: null,
    };
  },
  methods: {
    getBrandsCars() {
      api.get(`/carros/marcas`).then(r => {
        this.carsData = r.data;
      });
    },
    getModelsCars(idCar, index) {
      this.activeItem = index;

      api.get(`/carros/marcas/${idCar}/modelos`).then(r => {
        this.modelsData = r.data.modelos;
      });
    },
  },
  created() {
    this.getBrandsCars();
  },
}
</script>

<style scoped lang="scss">
.list-cars {
  h2 {
    font-weight: bold;
    font-size: 32px;
    padding: 20px 0;
  }

  &__models-box {
    margin-top: 50px;
  }

  &__brands-box,
  &__models-box {
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 14px 5px rgba(58, 59, 69, .15);

     &--title {
       border-top-left-radius: 5px;
       border-top-right-radius: 5px;
       background-color:#F8F9FC;
       padding: 15px 20px;
       border-bottom: 1px solid #E3E6F0;

       h3 {
         font-size: 22px;
         font-weight: bold;
         color: #4E73DF;
       }
     }

     &--infos {
       width: 95%;
       margin: 20px auto;
       padding: 0 15px;
       

       h4 {
         border-top: 1px solid #E3E6F0;
         border-bottom: 2px solid #E3E6F0;
         padding: 15px 0;
         font-size: 20px;
         font-weight: bold;
       }

       ul {
         max-height: 450px;
         overflow: auto;
       }

       li {
         padding: 20px 0 30px 0;
         border-bottom: 1px solid #E3E6F0;
         display: flex;
         position: relative;
         width: 100%;

         p {
           font-size: 18px;
         }

         button {
           border: 0;
           background: none;
           color: #4E73DF;
           font-weight: bold;
           left: 50%;
           position: absolute;
           transition: 0.2s;

           &.active {
            color: #1CC88A;
           }
         }
       }
     }
  }
}

/* ================= Responsive ================= */
@media screen and (max-width: 768px) {
  .list-cars {
    h2 {
      font-size: 28px;
      padding-left: 12px;
    }
    
    &__brands-box,
    &__models-box {
      margin: 0 5px;

      &--title {
        h3 {
          font-size: 18px;
       }
      }

      &--infos {
        h4 {
         font-size: 18px;
       }

       ul {
         max-height: 300px;
       }

       li {
         p {
           font-size: 16px;
         }
       }
      }
    }
  }
}
</style>
