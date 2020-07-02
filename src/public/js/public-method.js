export const linkMethod = {
    methods: {
        linkTo(path, a, b) {
            let q = {}
            if (a.length >= 1) {
                for (let i = 0; i < a.length; i++) {
                    Object.assign(q, {
                        [`query${i === 0 ? '' : i + 1}`]: a[i]
                    })
                }
            }
            this.$router.push({
                path: `/pages/${path}/index`,
                query: q,
                isTab: b
            })
        }
    }
}

