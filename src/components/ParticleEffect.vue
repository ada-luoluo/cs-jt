<template>
  <div class="particle-container">
    <!-- 粒子容器 -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.createParticles();
  },
  methods: {
    createParticles() {
      const particleContainer = document.querySelector('.particle-container');

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particleContainer.appendChild(particle);
      }

      const particles = document.querySelectorAll('.particle');

      particles.forEach((particle) => {
        // 设置每个粒子的初始位置和动画
        const startX = Math.random() * particleContainer.clientWidth;
        const startY = Math.random() * particleContainer.clientHeight;
        const endX = Math.random() * particleContainer.clientWidth;
        const endY = Math.random() * particleContainer.clientHeight;
        const duration = Math.random() * 3 + 1;
        const size = Math.random() * (20 - 12) + 12;

        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.animate(
            [
              { transform: `translate(${startX}px, ${startY}px)`, backgroundColor: getRandomColor() },
              { transform: `translate(${endX}px, ${endY}px)`, backgroundColor: getRandomColor() },
            ],
            {
              duration: duration * 3000,
              easing: 'linear',
              iterations: Infinity,
            }
        );
      });
    },
  },
};

function getRandomColor() {
  const blueColors = ['#00adf3', '#43d2cf', '#009dbd', '#00d9ff', '#00CCFF', '#00FFFF'];
  return blueColors[Math.floor(Math.random() * blueColors.length)];
}
</script>

<style>
.particle-container {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
}


@media only screen and (min-width: 0px) and (max-width:767px){
  .particle-container {
    height: 330px;
  }
}


</style>