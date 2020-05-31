<template>
    <section id="presentation">
        <div class="information">
            <h1>{{this.name}}</h1>
        <h3>{{this.scholarity}}</h3>
        <h4>{{this.nacionality}} -- {{this.phoneNumber}} -- <a href="mailto:andres.azuara.portillo@outlook.com">{{this.email}}</a></h4>
        </div>
    </section>
</template>

<script>
export default {
    name: "PxPresentation",
    props: {
        background: {
            type: String,
            default: ""
        }
    },
    data: function(){
        return {
            name: "Andrés Azuara",
            scholarity: "Informatic Engineering",
            nacionality: "Guadalajara, Jal",
            phoneNumber: "3311740978",
            email: "andres.azuara.portillo@outlook.com"
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway");

@media only screen and (max-width: 560px){
    #presentation {
        background-image: url("./../assets/mobile-presentation-background.jpg");
        background-size: cover;
        color: #1687a7
    }

    a{
        font-size: .7em;
    }
}

@media only screen and (min-width: 561px){
    #presentation{
        background-image: url("./../assets/presentation-background.jpeg");
        background-size: cover;
        color: #fff;
    }
}

#presentation {
  padding-bottom: 20%;
  text-align: center;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 1.5em;
}

a{
    color: white;
    text-decoration: underline;
}
hr {
  width: 20%;
  background-color: #fff;
}

h1 {
  font-size: 3.5rem;
  margin-top: 0;
}

.information {
    padding-top: 20%;
}
</style>