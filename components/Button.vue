<template>
    <button class="app-button ">
        <h1 >
            <slot/>
        </h1>
    </button>
</template>
<style lang="scss" scoped>
.app-button {
    position: relative;
    color: '#2E2A21';
    transition: all 0.2s linear;

    h2 {
        font-size: inherit;
        letter-spacing: 0.15em;
    }
}

.app-button:before {
 content: '';

 background-color: #C99608;
 height: 0.8em;
 position: absolute;
 bottom: 0.7em;
 left: -0.05em;
 right: -0.05em;
 z-index: -1;
 transition: all 0.2s linear;
}


.app-button:hover::before {
   height: 100%;
   bottom: calc(0.7em - 0.4em);
}

.app-button:hover {
    color: white;
}

@media (max-width: 768px) {
    .app-button:before {
 content: '';

 background-color: #C99608;
 height: 0.6em;
 position: absolute;
 bottom: 0.3em;
 left: -0.05em;
 right: -0.05em;
 z-index: -1;
 transition: all 0.2s linear;
}

.app-button:hover::before {
   height: 100%;
   bottom: calc(0.7em - 0.5em);
}
}
</style>