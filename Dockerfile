# Use the official Cypress image
FROM cypress/included:12.12.0

# Set working directory
WORKDIR /e2e

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Command to run tests
ENTRYPOINT ["npx", "cypress", "run"]