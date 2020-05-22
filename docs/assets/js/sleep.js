function sleep_aux(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(ms){
    await sleep_aux(ms);
}
