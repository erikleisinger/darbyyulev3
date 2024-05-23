const preloadImages = {
    '/': [
    'hero_desktop.png',
    'hero_mobile.png',
    ],
    '/about': [
    'about_desktop.png',
    'about_desktop_2.png',
    'about_mobile.png',
    ],
    '/contact': [
    'contact_bg.png',
    'contact_bg_mobile.png',
    'contact_splash.png',
    ],
    '/work': [
    'item_main_arc.png',
    'item_main_ccc.png',
    'item_main_content.png',
    'item_main_graphics.png',
    'item_main_pebble.png',
    ],
    '/work/ccc': [
    'ccc_bg.png',
    'ccc_header.png',
    'ccc_header_mobile.png',
    ],
    '/work/pebble': [
    'pebble_header.png',
    'pebble_header_bg.png',
    'pebble_header_mobile.png',
    ],
    '/work/graphics': [
    'graphics_bg.png',
    'graphics_header.png',
    'graphics_header_mobile.png',
    ],
    '/work/arc': [
    'arc_bg.png',
    'arc_header.png',
    'arc_header_mobile.png',
    ],
    '/work/content': [
    'content_bg.png',
    'content_blog.png',
    'content_video_preview.png',
    ]
  }

  export default async (path, callback) => {
    const images = preloadImages[path].map(imageSrc => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `/images/${imageSrc}`;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
      await Promise.all(images).then(callback)
  }