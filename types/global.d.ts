// for style loader
declare module '*.scss' {
    const styles: any;
    export = styles;
}

declare module '*.css' {
    const styles: any;
    export = styles;
}

declare module '*.svg' {
    const content: any;
    export = content;
}