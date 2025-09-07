<template>
  <section id="contact" class="section">
    <h2>Kontakt</h2>
    <form action="https://formspree.io/f/your_form_id" method="POST" class="contact-form">
      <div class="row">
        <input type="text" name="name" placeholder="Nimi" required />
        <input type="email" name="email" placeholder="E-post" required />
      </div>
      <textarea name="message" placeholder="Sõnum" rows="5"></textarea>
      <button type="submit" class="btn btn-primary"><span class="material-icons-round" aria-hidden="true">send</span>Saada</button>
    </form>
    <p class="note">Näidisvorm: asenda <code>your_form_id</code> oma Formspree/Netlify Forms/Google Forms lahendusega.</p>
  </section>
</template>

<script setup>
</script>
