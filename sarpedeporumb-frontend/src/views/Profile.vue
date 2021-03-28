<template>
<div class="grid-container">
  <div class="grid-x align-center">
    <div class="grid-y">
      <div class="small-0 medium-2 large-4 xlarge-8" />
      <profile-card class="" />
      <div class="auto" />
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

import profileCard from '../components/profileCard.vue';

export default {
  name: 'Profile',
  components: {
    profileCard,
  },
};
</script>

<style lang='scss'>

  @import "../app";

  $card-user-container-margin-bottom: 1rem;
  $card-user-container-radius: 10px;
  $card-user-container-background: $white;
  $card-user-container-color: $black;
  $card-user-container-image-size: rem-calc(190);

  .card-user-container {
    margin-bottom: $card-user-container-margin-bottom;
    background-color: $card-user-container-background;
    color: $black;
    overflow: hidden;
    padding: 0;
    border-radius: $card-user-container-radius;

    .card-user-avatar {
      .user-image {
        display: block;
        margin: auto;
        border-radius: 50%;
        width: $card-user-container-image-size;
        height: $card-user-container-image-size;
        padding: rem-calc(15);

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .card-user-bio {
      padding: 1rem;
      text-align: center;

      .location {
        display: inline-block;
        margin: 0 rem-calc(15);
        color: $secondary-color;
        font-size: rem-calc(14);
      }

      .location-icon,
      .location-text {
        display: inline-block;
        padding: 0 rem-calc(5);
      }
    }

    .card-user-social {
      background: $light-gray;
      padding: 1rem;
      text-align: center;

      ul {
        display: inline-block;

        li {
          margin: 0 10px;
          font-size: 1.2em;
          cursor: pointer;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }

    .card-user-button {
      text-align: center;
      padding: 1rem;
    }
  }

</style>
