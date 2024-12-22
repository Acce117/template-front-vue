<script setup lang="ts">
import { Form } from 'vee-validate';
import Button from 'primevue/button';
import InputOtp from 'primevue/inputotp';
import Step from 'primevue/step';
import StepList from 'primevue/steplist';
import StepPanel from 'primevue/steppanel';
import StepPanels from 'primevue/steppanels';
import Stepper from 'primevue/stepper';
import VInput from '@/common/components/VInput.vue';

defineExpose({
    header: 'auth.restore_password.header'
})
</script>

<!-- TODO internationalization -->
<template>
    <div class="card flex justify-center">
        <Stepper value="1" linear class="basis-[50rem]">
            <StepList>
                <Step value="1"></Step>
                <Step value="2"></Step>
                <Step value="3"></Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <Form class="p-2 w-74">
                        <div class="">
                            <p class="mb-7">{{ $t('recover-password.email') }}</p>
                            <VInput :label="$t('users.email')" name="email" type="email"></VInput>
                        </div>
                        <div class="flex flex-justify-end">
                            <Button :label="$t('actions.next')" @click="activateCallback('2')" class="w-25"/>
                        </div>
                    </Form>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <Form class="p-2 w-74">
                        <div>
                            <p class="mb-7">{{ $t('recover-password.recover-code') }}</p>
                            <div class="flex flex-justify-center mb-7">
                                <InputOtp :length="6" integer-only></InputOtp>
                            </div>
                        </div>
                        <div class="flex flex-justify-between">
                            <Button :label="$t('actions.back')" severity="secondary" @click="activateCallback('1')" class="w-25"/>
                            <Button :label="$t('actions.next')" @click="activateCallback('3')" class="w-25"/>
                        </div>
                    </Form>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <Form class="p-2 w-74">
                        <div>
                            <p class="mb-7">{{ $t('change-password.new-password') }}</p>
                            <VInput :label="$t('auth.password')" name="password" class="auth_input"></VInput>
                            <VInput :label="$t('change-password.confirm-password')" name="confirm_password" class="auth_input"></VInput>
                        </div>
                        <div class="flex flex-justify-between">
                            <Button :label="$t('actions.back')" severity="secondary" @click="activateCallback('2')" class="w-25"/>
                            <Button :label="$t('actions.accept')" class="w-25"/>
                        </div>
                    </Form>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>