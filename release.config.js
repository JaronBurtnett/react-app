module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/JaronBurtnett/react-app",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
}