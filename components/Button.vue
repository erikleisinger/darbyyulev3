<template>
    <button class="app-button text-h1">
        <h1 >
            <slot/>
        </h1>
        <div class="relative underline-container"/>
    </button>
</template>
<style lang="scss" scoped>
.app-button {
    position: relative;
    color: '#2E2A21';
    transition: all 0.2s linear;

    h1 {
      
        padding: 0px clamp(4px, 0.6vw, 8px);
        line-height: 1!important;
    }

    .underline-container {
        width: 100%;
        position: relative;
        margin-top: -0.5em;
        z-index: -1;
        font-size: inherit;
        &:before {
            content: '';
            background-color: var(--color-canary);
            height: 0.5em;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.3s;
        }
    }
    &:hover {
        .underline-container {
            &:before {
                transform: scaleY(2.45);
                transform-origin: bottom;
            }
        }
    }
}

// .app-button:before {
//  content: '';

//  background-color: var(--color-canary);
//  height: 0.8em;
//  position: absolute;
//  bottom: 0.7em;
//  left: -0.05em;
//  right: -0.05em;
//  z-index: -1;
//  transition: all 0.2s linear;
// }


// .app-button:hover::before {
//    height: 100%;
//    bottom: calc(0.7em - 0.4em);
// }

.app-button:hover {
    color: white;
}

// @media (max-width: 768px) {
//     .app-button:before {
//  content: '';
//  height: 0.6em;
//  position: absolute;
//  bottom: 0.3em;
//  left: -0.05em;
//  right: -0.05em;
//  z-index: -1;
//  transition: all 0.2s linear;
// }

// .app-button:hover::before {
//    height: 100%;
//    bottom: calc(0.7em - 0.5em);
// }
// }
</style>