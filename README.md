# Xiicur Survivors

## Story

2133 AD: The curse of the number 13 inflicted on earth is found to originate from the exoplanet Xiicur.

You are humanity's best hope, tasked with gathering data from this planet to help rid everyone of this phobia.

Can you survive this harsh planet long enough to uncover the secrets behind the curse?

### How to play

-   Attacking is automatic
-   WASD/arrows/touch & drag to move
-   Click/touch/space to use menus & select items
-   The game also supports controllers

## Contributing

### Installing Dependencies

After cloning this repo, install dependecies:

```
pnpm i
```

### Checking code format

```
pnpm check
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm start
# Alternatively to test in a more advanced WebXDC emulator:
pnpm emulator
```

### Building

To package the WebXDC file:

```
pnpm build
```

To package the WebXDC with developer tools inside to debug in Delta Chat, set the `NODE_ENV`
environment variable to "debug":

```
NODE_ENV=debug pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag -a v1.0.1
git push origin v1.0.1
```

## Credits

-   This is a port to Webxdc of [Xiicur Survivors](https://github.com/rottencandy/js13k2024) originally written by [rottencandy](https://github.com/rottencandy) for [js13k 2024](https://js13kgames.com/) game jam
-   [Zzfxm](https://github.com/keithclark/ZzFXM) for music

Color palette: https://lospec.com/palette-list/cc-29

CRT Shader: https://www.shadertoy.com/view/WsVSzV

Art inspiration:

-   https://trevor-pupkin.itch.io/outer-buddies
-   https://trevor-pupkin.itch.io/tech-dungeon-roguelite
-   https://trevor-pupkin.itch.io/minimal-dungeon
-   https://bagong-games.itch.io/hana-caraka-base-character
