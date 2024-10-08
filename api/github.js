const express = require('express')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const uploadToGithub = async (filePath, githubPath) => {
    const fileContent = fs.readFileSync(filePath, { encoding: 'base64' })

    const apiUrl = `https://api.github.com/repos/Dzakkk/toilet_API/contents/${githubPath}`

    try {
        const response = await axios.put(apiUrl, {
            message: `add image ${path.basename(filePath)}`,
            content: fileContent,
            committer: {
                name: 'Dzakkk',
                email: 'fpdzak@gmail.com'
            }
        }, {
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`
            }
        })
        return response.data.content.download_url;
    } catch (error) {
        console.error(`error uploading to github:`, error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = uploadToGithub
