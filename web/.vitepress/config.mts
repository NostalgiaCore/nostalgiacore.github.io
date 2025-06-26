import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NostalgiaCore",
  description: "NostalgiaCore is a fork of Legacy PocketMine-MP for MCPE 0.8.1",
  base: '/',
  themeConfig: {
    lastUpdated: {
      text: 'Updated in',
      formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
      }
    },

    editLink: {
    pattern: 'https://github.com/NostalgiaCore/nostalgiacore.github.io/edit/main/web/:path',
    text: 'Suggest changes to this page',
  },

    nav: [
      { text: 'Home', link: '/'},
      { text: 'Releases', link: '/releases'},
      {
        text: "Docs",
        items: [
          {
            text: "API Reference",
            items: [
              { text: "AchievementAPI", link: "/docs/api/AchievementAPI" },
              { text: "BanAPI", link: "/docs/api/BanAPI" },
              { text: "BlockAPI", link: "/docs/api/BlockAPI" },
              { text: "ChatAPI", link: "/docs/api/ChatAPI" },
              { text: "ConsoleAPI", link: "/docs/api/ConsoleAPI" },
              { text: "EntityAPI", link: "/docs/api/EntityAPI" },
              { text: "LevelAPI", link: "/docs/api/LevelAPI" },
              { text: "PlayerAPI", link: "/docs/api/PlayerAPI" },
              { text: "PluginAPI", link: "/docs/api/PluginAPI" },
              { text: "QueryAPI", link: "/docs/api/QueryAPI" },
              { text: "ServerAPI", link: "/docs/api/ServerAPI" },
              { text: "TileAPI", link: "/docs/api/TileAPI" },
              { text: "TimeAPI", link: "/docs/api/" }
            ]
          },
          { text: "Installation", link: "/docs#installation" },
          { text: "How to use auto-restart?", link: "/docs#how-to-use-auto-restart" },
        ]
      },
      {
        text: "PHP Binaries",
        items: [
          { text: "PHP 8.0 Linux x86_64", link: "https://github.com/kotyaralih/NostalgiaCore/releases/download/NostalgiaCore_1.1.0_01/PHP-Linux-x86_64.tar.gz" },
          { text: "PHP 8.0 Linux ARMv8", link: "https://github.com/kotyaralih/NostalgiaCore/releases/download/NostalgiaCore_1.1.0_01/PHP_Linux_ARMv8.tar.gz" },
          { text: "PHP 8.0 Windows x64", link: "https://github.com/kotyaralih/NostalgiaCore/releases/download/NostalgiaCore_1.1.0_01/PHP_Windows_x64.zip" },
        ]
      },
    ],

    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Releases', link: '/releases' },
      {
        text: "Docs",
        link: "/docs",
        items: [
          {
            text: "API Reference",
            link: "/docs#api-reference",
            items: [
              { text: "AchievementAPI", link: "/docs/api/AchievementAPI" },
              { text: "BanAPI", link: "/docs/api/BanAPI" },
              { text: "BlockAPI", link: "/docs/api/BlockAPI" },
              { text: "ChatAPI", link: "/docs/api/ChatAPI" },
              { text: "ConsoleAPI", link: "/docs/api/ConsoleAPI" },
              { text: "EntityAPI", link: "/docs/api/EntityAPI" },
              { text: "LevelAPI", link: "/docs/api/LevelAPI" },
              { text: "PlayerAPI", link: "/docs/api/PlayerAPI" },
              { text: "PluginAPI", link: "/docs/api/PluginAPI" },
              { text: "QueryAPI", link: "/docs/api/QueryAPI" },
              { text: "ServerAPI", link: "/docs/api/ServerAPI" },
              { text: "TileAPI", link: "/docs/api/TileAPI" },
              { text: "TimeAPI", link: "/docs/api/" }
            ]
          },
          { text: "Installation", link: "/docs#installation" },
          { text: "How to use auto-restart?", link: "/docs#how-to-use-auto-restart" },
        ]
      },
      {
        text: "PHP Binaries",
        items: [
          { text: "PHP 8.0", link: "https://github.com/pmmp/PHP-Binaries/releases/tag/pm4-php-8.0-latest" },
          { text: "PHP 8.0 ARMv8", link: "https://github.com/DaisukeDaisuke/AndroidPHP/releases/tag/8.0.28" },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kotyaralih/NostalgiaCore/' },
      { icon: 'discord', link: 'https://discord.gg/uSHEWe6NC3' }
    ]
  },

  ignoreDeadLinks: true
})
