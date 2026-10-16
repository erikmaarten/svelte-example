<script>
  // Add page variables and functions here.
  import profileImage from "../assets/profile.jpg";
</script>

<div class="page">
  <div class="card">
    <div class="profile-text">
      <p class="professional-title">Photographer</p>
      <h1>Olivia Dunham</h1>
      <div class="underscore"></div>
      <p>
        Eleifend felis pharetra mi montes sit vulputate. Integer semper
        facilisis mi ipsum condimentum. Sociis eu est sed, sociis dis nunc.
      </p>
    </div>
    <img alt="profile" src={profileImage} />
  </div>
</div>

<style>
  h1,
  h2,
  p {
    font-family: Inter, Arial;
  }
  :global(body) {
    margin: 0;
  }
  .profile-text {
    margin: 10px 20px;
  }
  .page {
    background-color: pink;
  }
  .underscore {
    width: 40%;
    border-bottom: 2px solid pink;
  }
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 200px;
  }
  .card {
    max-width: 400px;
    display: flex;
    background-color: rgb(82, 78, 104);
  }
  p {
    font-size: 12px;
    color: rgb(198, 203, 230);
  }
  h1 {
    color: rgb(249, 249, 249);
    font-size: 20px;
    margin-top: 10px;
    font-weight: normal;
  }
  h2 {
    font-family: "Courier New", Courier, monospace;
  }
  button {
    /* width: 10%; */
  }
  .page {
    height: 100vh;
  }
  /* Add styles here. */
</style>
