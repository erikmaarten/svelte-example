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
    background-color: #fabba7;
  }
  .underscore {
    width: 40%;
    border-bottom: 2px solid #fabba7;
  }
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 200px;
    border-radius: 0 4px 4px 0;
  }
  .card {
    max-width: 400px;
    display: flex;
    background-color: #504e54;
    border-radius: 4px;
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

  .page {
    height: 100vh;
  }
  /* Add styles here. */
</style>
