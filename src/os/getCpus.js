import os from "node:os";

const showCPUs = () => {
  const cpus = os.cpus();

  const info = cpus
    .map((cpu, i) => `CPU ${i + 1}:\n Model: ${cpu.model}\n Speed: ${(cpu.speed / 1000).toFixed(2)} GHz`)
    .join("\n");

  console.log(`Overall amount of CPUs: ${cpus.length}\n${info}`);
};

export default showCPUs;
