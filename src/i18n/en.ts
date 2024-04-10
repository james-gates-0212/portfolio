/**
 * I18n dictionary for the en.
 */

const en = {
  app: {
    title: 'Portfolio',
  },

  auth: {
    userNotFound: `Sorry, we don't recognize your credentials`,
    wrongPassword: `Sorry, we don't recognize your credentials`,
    weakPassword: 'This password is too weak',
    emailAlreadyInUse: 'Email is already in use',
    invalidEmail: 'Please provide a valid email',
    passwordReset: {
      invalidToken: 'Password reset link is invalid or has expired',
      error: `Email not recognized`,
    },
    emailAddressVerificationEmail: {
      invalidToken: 'Email verification link is invalid or has expired.',
      error: `Email not recognized.`,
      signedInAsWrongUser: `This email confirmation was sent to {0} but you're signed in as {1}.`,
    },
    passwordChange: {
      invalidPassword: 'The old password is invalid',
    },
  },

  user: {
    errors: {
      userAlreadyExists: 'User with this email already exists.',
      userNotFound: 'User not found.',
      destroyingHimself: `You can't delete yourself.`,
      revokingOwnPermission: `You can't revoke your own admin permission.`,
      revokingPlanUser: `You can't revoke the admin permission of the plan manager.`,
      destroyingPlanUser: `You can't delete the plan manager.`,
    },
  },

  errors: {
    inUse: {
      message: '`{0}` is in use',
    },
    notFound: {
      message: 'Not Found',
    },
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
  },

  table: {
    noRecords: 'No records',
  },

  common: {
    action: 'Action',
    addNew: 'Add new',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    no: 'No',
    save: 'Save',
    yes: 'Yes',
  },

  questions: {
    default: 'Are you sure?',
    delete: 'Are you sure to delete this?',
  },

  entities: {
    user: {
      title: 'User',
      menu: 'User',
      fields: {
        id: 'ID',
        key: 'Key',
        value: 'Value',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
      },
    },
  },
};

export default en;
